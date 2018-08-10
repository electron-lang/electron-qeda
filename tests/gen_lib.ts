import * as fs from 'fs'
import * as path from 'path'
import { FpLibTable } from 'libkicad'
import { Library } from '../src'

const layoutDir = path.join(__dirname, '..', 'layout');
if (!fs.existsSync(layoutDir)) {
    fs.mkdirSync(layoutDir);
}

process.chdir(layoutDir);

const fplib = new FpLibTable();
fplib.addLib('qeda-generated-lib');
fplib.write();

const lib = new Library('qeda-generated-lib')
lib.addFootprint({
    name: 'R0402',
    description: 'Chip resistor 1x0.5 mm',
    keywords: [ 'Resistor', '1/16W' ],
    housing: {
        pattern: 'chip',
        bodyLength: '0.9-1.1',
        bodyWidth: '0.45-0.55',
        height: '0.3-0.4',
        leadLength: '0.1-0.3'
    }
})
lib.generate(layoutDir)
