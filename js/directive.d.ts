declare interface zoomClassNames {
    active?: string;
    zoom?: string
    transition?: string;
    visible?: string;
}

declare interface zoomSettings {
    scaleDefault?: number;
    scaleDifference?: number;
    scaleMin?: number;
    scaleMax?: number;
    onZoomStart?: Function;
    onZoomEnd?: Function;
}

declare function zoom(classNames: zoomClassNames, settings: zoomSettings): void

export default zoom;