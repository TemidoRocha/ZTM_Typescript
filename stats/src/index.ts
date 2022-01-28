import { ConsoleReport } from './reportTargets/ConsoleReport';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './Analysers/WinsAnalysis';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

let summaryConsole = Summary.winsAnalysisWithConsoleReport('Cardiff');
summaryConsole.buildAndPrintReport(matchReader.matches);

// after new refactor with different approach to instatiate the class
const summaryHtml = Summary.winsAnalysisWithHtmlReport('Cardiff');
summaryHtml.buildAndPrintReport(matchReader.matches);
