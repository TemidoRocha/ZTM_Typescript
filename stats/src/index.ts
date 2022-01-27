import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();

/**
 * enum - enumeration
 *
 * 1. Follow near-identical syntax rules as normal objects
 * 2. Creates an object with the same keys and values when converted from TS to JS
 * 3. Primary goal is to signal to other engineers that theses are all closely related valeus
 * 4. Use whenever we have a small fixed set of values that are all closely related and known at compile time
 */
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  draw = 'D',
}

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
