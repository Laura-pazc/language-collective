#!/usr/bin/env node

/**
 * Mission File Validator
 * Checks mission files against MISSION-SCHEMA requirements
 */

const fs = require('fs');
const path = require('path');

const REQUIRED_SECTIONS = [
  'title',
  'metadata',
  'vocabulary',
  'conversation',
  'resources',
  'practice',
  'levelup'
];

const PRACTICE_TYPES = [
  'multiple choice',
  'fill in the blank',
  'match',
  'write a sentence',
  'vocab review'
];

function validateMissionFile(filePath) {
  const errors = [];
  const warnings = [];

  if (!fs.existsSync(filePath)) {
    return { errors: [`File not found: ${filePath}`], warnings: [] };
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const filename = path.basename(filePath);
  const dirname = path.basename(path.dirname(filePath));

  // Check filename format (no kb- prefix)
  const filenameRegex = /^[\w-]+-(?:a[12]|b[12]|a[12]-a[12])\.md$/;
  if (!filenameRegex.test(filename)) {
    errors.push(`Filename format invalid. Expected: [slug]-[level].md, got: ${filename}`);
  }

  // Check folder name matches filename (without .md)
  const expectedFolder = filename.replace('.md', '');
  if (dirname !== expectedFolder) {
    errors.push(`Folder name doesn't match filename. Expected: ${expectedFolder}, got: ${dirname}`);
  }

  // Check for H1 title
  const titleMatch = content.match(/^# (.+)$/m);
  if (!titleMatch) {
    errors.push('Missing H1 title');
  }

  // Check metadata header
  const metadataRegex = /\*\*Target language:\*\*.*?\*\*CEFR level:\*\*.*?\*\*Register:\*\*/;
  if (!metadataRegex.test(content)) {
    errors.push('Missing or malformed metadata header (target language, CEFR level, register)');
  }

  // Check for vocabulary table
  const vocabTableRegex = /\| German \| English \|\s*\n\s*\|---\|---\|/;
  if (!vocabTableRegex.test(content)) {
    errors.push('Missing or malformed vocabulary table');
  } else {
    // Count vocab entries
    const vocabSection = content.match(/\| German \| English \|[\s\S]*?(?=\n##)/);
    if (vocabSection) {
      const vocabLines = vocabSection[0].match(/^\s*\|[^|]+\|[^|]+\|\s*$/gm) || [];
      const vocabCount = vocabLines.filter(line => !line.match(/---/)).length - 1; // -1 for header
      if (vocabCount !== 8) {
        errors.push(`Vocabulary table has ${vocabCount} entries, expected 8`);
      }

      // Extract vocab for bolding check
      const vocabItems = [];
      vocabLines.forEach(line => {
        const match = line.match(/\|\s*(.+?)\s*\|/);
        if (match && !line.includes('---') && !line.includes('German')) {
          vocabItems.push(match[1].trim());
        }
      });

      // Check if vocab is bolded in conversation
      const conversationSection = content.match(/## Conversation Simulation[\s\S]*?(?=\n##)/);
      if (conversationSection) {
        vocabItems.forEach(vocab => {
          if (vocab && !conversationSection[0].includes(`**${vocab}**`)) {
            warnings.push(`Vocabulary "${vocab}" appears in table but not bolded in conversation`);
          }
        });
      }
    }
  }

  // Check for conversation simulation section (case-insensitive)
  const conversationRegex = /## conversation simulation/i;
  if (!conversationRegex.test(content)) {
    errors.push('Missing "Conversation Simulation" section');
  }

  // Check for Go Deeper section (case-insensitive)
  const goDeepRegex = /## go deep/i;
  if (!goDeepRegex.test(content)) {
    errors.push('Missing "Go Deeper" section with resources');
  }

  // Check for Practice section (case-insensitive)
  const practiceHeaderRegex = /## practice/i;
  if (!practiceHeaderRegex.test(content)) {
    errors.push('Missing "Practice" section');
  } else {
    // Check for practice exercises
    const practiceSection = content.match(/## practice[\s\S]*?(?=\n##|$)/i);
    if (practiceSection) {
      let practiceCount = 0;
      PRACTICE_TYPES.forEach(type => {
        if (practiceSection[0].toLowerCase().includes(type.toLowerCase())) {
          practiceCount++;
        }
      });
      if (practiceCount < 5) {
        warnings.push(`Practice section found ${practiceCount} exercise types, expected 5`);
      }
    }
  }

  // Check for Level Up section (case-insensitive)
  const levelUpRegex = /## level up/i;
  if (!levelUpRegex.test(content)) {
    errors.push('Missing "Level Up" section for advanced CEFR levels');
  }

  // Check for common formatting issues
  if (content.includes('**(')) {
    warnings.push('Found "**(" pattern - check for malformed formatting');
  }

  return { errors, warnings };
}

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error('Usage: node validate-missions.js <file1.md> [file2.md] ...');
    console.error('Or: node validate-missions.js scenarios/');
    process.exit(1);
  }

  let filesToValidate = [];

  args.forEach(arg => {
    const stat = fs.statSync(arg);
    if (stat.isDirectory()) {
      // Find all .md files in directory recursively
      const findMissions = (dir) => {
        fs.readdirSync(dir).forEach(file => {
          const fullPath = path.join(dir, file);
          const fileStat = fs.statSync(fullPath);
          if (fileStat.isDirectory()) {
            findMissions(fullPath);
          } else if (file.endsWith('.md') && file.startsWith('kb-')) {
            filesToValidate.push(fullPath);
          }
        });
      };
      findMissions(arg);
    } else if (stat.isFile() && arg.endsWith('.md')) {
      filesToValidate.push(arg);
    }
  });

  let totalErrors = 0;
  let totalWarnings = 0;

  filesToValidate.forEach(file => {
    const { errors, warnings } = validateMissionFile(file);

    if (errors.length > 0 || warnings.length > 0) {
      console.log(`\n📄 ${file}`);

      if (errors.length > 0) {
        console.log(`  ❌ ERRORS (${errors.length}):`);
        errors.forEach(err => console.log(`     - ${err}`));
        totalErrors += errors.length;
      }

      if (warnings.length > 0) {
        console.log(`  ⚠️  WARNINGS (${warnings.length}):`);
        warnings.forEach(warn => console.log(`     - ${warn}`));
        totalWarnings += warnings.length;
      }
    } else {
      console.log(`✅ ${file}`);
    }
  });

  console.log(`\n📊 Summary: ${totalErrors} errors, ${totalWarnings} warnings`);

  if (totalErrors > 0) {
    process.exit(1);
  }
}

main();
