declare module 'qeda/lib/qeda-element' {
    import QedaPattern = require('qeda/lib/qeda-pattern');

    class QedaElement {
        readonly pattern: QedaPattern;
        constructor(settings: {pattern: any}, fp: any);
        render(): void;
    }

    export = QedaElement
}

declare module 'qeda/lib/qeda-pattern' {

    class QedaPattern {
        constructor(args: {library: {pattern: any}, housing: any});
    }

    export = QedaPattern
}

declare module 'qeda/lib/kicad-generator' {
    import QedaPattern = require('qeda/lib/qeda-pattern')

    class KicadGenerator {
        constructor(args: {pattern: any});
        _generatePattern(fd: number, pattern: QedaPattern): void;
    }

    export = KicadGenerator
}
