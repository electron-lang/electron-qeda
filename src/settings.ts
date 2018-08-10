
export interface FootprintSettings {
    style: 'default', // TODO
    densityLevel: 'N', // TODO
    decimals: number,
    polarityMark: 'dot', // TODO
    preferManufacturer: boolean,
    smoothPadCorners: boolean,
    tolerance: {
        default: number,
        fabrication: number,
        placement: number,
    },
    clearance: {
        padToSilk: number,
        padToPad: number,
        padToMask: number,
        leadToHole: number,
    },
    ratio: {
        padToHole: number,
        cornerToWidth: number,
    },
    minimum: {
        ringWidth: number,
        holeDiameter: number,
        maskWidth: number,
        spaceForIron: number,
    },
    maximum: {
        cornerRadius: number,
    },
    lineWidth: {
        default: number,
        silkscreen: number, // IPC-7351C (0.1, 0.12, 0.15)
        assembly: number, // IPC-7351C
        courtyard: number, // IPC-7351C
    },
    fontSize: { // mm
        default: number,
        refDes: number,  // IPC-7351C (1, 1.2, 1.5)
        value: number,
    },
    ball: {
        collapsible: boolean,
    }
}

export const DefaultFootprintSettings: FootprintSettings = {
    style: 'default',
    densityLevel: 'N', // Nominal
    decimals: 3,
    polarityMark: 'dot',
    preferManufacturer: true,
    smoothPadCorners: false, // Use ratio.cornerToWidth and maximum.cornerRadius
    tolerance: {
        default: 0.1,
        fabrication: 0.1,
        placement: 0.1
    },
    clearance: {
        padToSilk: 0.2,
        padToPad: 0.2,
        padToMask: 0.05,
        leadToHole: 0.1
    },
    ratio: {
        padToHole: 1.5,
        cornerToWidth: 0.25
    },
    minimum: {
        ringWidth: 0.2,
        holeDiameter: 0.2,
        maskWidth: 0.2,
        spaceForIron: 0
    },
    maximum: {
        cornerRadius: 0.2
    },
    lineWidth: {
        default: 0.2,
        silkscreen: 0.12, // IPC-7351C (0.1, 0.12, 0.15)
        assembly: 0.1, // IPC-7351C
        courtyard: 0.05
    }, // IPC-7351C
    fontSize: { // mm
        default: 1,
        refDes: 1.2,  // IPC-7351C (1, 1.2, 1.5)
        value: 1
    },
    ball: {
        collapsible: true
    }
}
