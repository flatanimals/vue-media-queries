import Vue, { VueConstructor, ComponentOptions, PluginFunction } from 'vue'
import { default as bands } from '../src/bands'

export declare interface MediaQueryBands {
    mixin: ComponentOptions<Vue>
    [key: string]: any
}

export declare class MediaQueries {
    constructor(options?: { bands: MediaQueryBands })
    expr(expressionString): boolean
    below(...args): boolean
    above(...args): boolean
    between(...args): boolean
    beyond(...args): boolean
    install(Vue): PluginFunction<VueConstructor>
}

export declare type CommonBands<T, K extends keyof bands> = {
    [K in keyof T]: MediaQueryBands
}

declare module 'vue/types/vue' {
    interface Vue {
        readonly $mq: MediaQueries
    }
}
