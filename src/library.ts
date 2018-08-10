import * as fs from 'fs'
import * as path from 'path'
import QedaElement = require('qeda/lib/qeda-element')
import KicadGenerator = require('qeda/lib/kicad-generator')
import { FootprintSettings, DefaultFootprintSettings } from './settings'

export interface Footprint {
    name: string
    description: string
    keywords: string[]
    housing: Housing
}

// TODO complete
export interface Housing {
    pattern: string
    bodyLength: string
    bodyWidth: string
    height: string
    leadLength: string
}

export class Library {
    readonly footprints: Footprint[] = []

    constructor(readonly name: string, readonly settings?: FootprintSettings) {
        if (!settings) {
            this.settings = DefaultFootprintSettings
        }
    }

    addFootprint(fp: Footprint) {
        this.footprints.push(fp)
    }

    generate(dir?: string): void {
        dir = dir || process.cwd()

        const libPath = path.join(dir, `${this.name}.pretty`)
        if (!fs.existsSync(libPath)) {
            fs.mkdirSync(libPath)
        }

        const generator = new KicadGenerator({
            pattern: this.settings
        });

        for (let fp of this.footprints) {
            const qedaFp = fp as any
            qedaFp.keywords = qedaFp.keywords.join(',')
            qedaFp.schematic = { options: null }

            const elem = new QedaElement({ pattern: this.settings }, fp)
            elem.render()

            const fpPath = path.join(libPath, `${fp.name}.kicad_mod`)
            const fd = fs.openSync(fpPath, 'w')
            generator._generatePattern(fd, elem.pattern)
            fs.closeSync(fd)
        }
    }
}
