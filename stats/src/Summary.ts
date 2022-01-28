import { WinsAnalysis } from './Analysers/WinsAnalysis';
import { MatchData } from './MatchData';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';

export interface Analyser {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithConsoleReport(team: string) {
    return new Summary(new WinsAnalysis(team), new ConsoleReport());
  }

  static winsAnalysisWithHtmlReport(team: string) {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }
  constructor(public analyser: Analyser, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyser.run(matches);
    this.outputTarget.print(output);
  }
}
