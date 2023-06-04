type MapFnParams<V> = Parameters<Parameters<Array<V>['map']>[0]>
type MapFn<V, R> = (...params: MapFnParams<V>) => R
type MapSiftFn<V, R> = (...params: MapFnParams<V>) => [] | [NonNullable<R>]

const mapSift = <V, R>(mapFn: MapFn<V, R>): MapSiftFn<V, R> => (...params) => {
    const result = mapFn(...params)
    return result ? [result] : []
}

export default mapSift
