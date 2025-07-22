
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model prefix
 * 
 */
export type prefix = $Result.DefaultSelection<Prisma.$prefixPayload>
/**
 * Model image
 * 
 */
export type image = $Result.DefaultSelection<Prisma.$imagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prefix`: Exposes CRUD operations for the **prefix** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prefixes
    * const prefixes = await prisma.prefix.findMany()
    * ```
    */
  get prefix(): Prisma.prefixDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.imageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    prefix: 'prefix',
    image: 'image'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "prefix" | "image"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      prefix: {
        payload: Prisma.$prefixPayload<ExtArgs>
        fields: Prisma.prefixFieldRefs
        operations: {
          findUnique: {
            args: Prisma.prefixFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prefixPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.prefixFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prefixPayload>
          }
          findFirst: {
            args: Prisma.prefixFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prefixPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.prefixFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prefixPayload>
          }
          findMany: {
            args: Prisma.prefixFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prefixPayload>[]
          }
          create: {
            args: Prisma.prefixCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prefixPayload>
          }
          createMany: {
            args: Prisma.prefixCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.prefixDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prefixPayload>
          }
          update: {
            args: Prisma.prefixUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prefixPayload>
          }
          deleteMany: {
            args: Prisma.prefixDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.prefixUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.prefixUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prefixPayload>
          }
          aggregate: {
            args: Prisma.PrefixAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrefix>
          }
          groupBy: {
            args: Prisma.prefixGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrefixGroupByOutputType>[]
          }
          count: {
            args: Prisma.prefixCountArgs<ExtArgs>
            result: $Utils.Optional<PrefixCountAggregateOutputType> | number
          }
        }
      }
      image: {
        payload: Prisma.$imagePayload<ExtArgs>
        fields: Prisma.imageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.imageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.imageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload>
          }
          findFirst: {
            args: Prisma.imageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.imageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload>
          }
          findMany: {
            args: Prisma.imageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload>[]
          }
          create: {
            args: Prisma.imageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload>
          }
          createMany: {
            args: Prisma.imageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.imageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload>
          }
          update: {
            args: Prisma.imageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload>
          }
          deleteMany: {
            args: Prisma.imageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.imageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.imageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.imageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.imageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    prefix?: prefixOmit
    image?: imageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    images: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | UserCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: imageWhereInput
  }


  /**
   * Count Type PrefixCountOutputType
   */

  export type PrefixCountOutputType = {
    users: number
  }

  export type PrefixCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | PrefixCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * PrefixCountOutputType without action
   */
  export type PrefixCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrefixCountOutputType
     */
    select?: PrefixCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrefixCountOutputType without action
   */
  export type PrefixCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    preId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    preId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    fname: string | null
    lname: string | null
    preId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    fname: string | null
    lname: string | null
    preId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fname: number
    lname: number
    preId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    preId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    preId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    fname?: true
    lname?: true
    preId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fname?: true
    lname?: true
    preId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fname?: true
    lname?: true
    preId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    fname: string
    lname: string | null
    preId: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fname?: boolean
    lname?: boolean
    preId?: boolean
    prefixId?: boolean | prefixDefaultArgs<ExtArgs>
    images?: boolean | user$imagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    fname?: boolean
    lname?: boolean
    preId?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fname" | "lname" | "preId", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prefixId?: boolean | prefixDefaultArgs<ExtArgs>
    images?: boolean | user$imagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      prefixId: Prisma.$prefixPayload<ExtArgs>
      images: Prisma.$imagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fname: string
      lname: string | null
      preId: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prefixId<T extends prefixDefaultArgs<ExtArgs> = {}>(args?: Subset<T, prefixDefaultArgs<ExtArgs>>): Prisma__prefixClient<$Result.GetResult<Prisma.$prefixPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends user$imagesArgs<ExtArgs> = {}>(args?: Subset<T, user$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly fname: FieldRef<"user", 'String'>
    readonly lname: FieldRef<"user", 'String'>
    readonly preId: FieldRef<"user", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.images
   */
  export type user$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageInclude<ExtArgs> | null
    where?: imageWhereInput
    orderBy?: imageOrderByWithRelationInput | imageOrderByWithRelationInput[]
    cursor?: imageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model prefix
   */

  export type AggregatePrefix = {
    _count: PrefixCountAggregateOutputType | null
    _avg: PrefixAvgAggregateOutputType | null
    _sum: PrefixSumAggregateOutputType | null
    _min: PrefixMinAggregateOutputType | null
    _max: PrefixMaxAggregateOutputType | null
  }

  export type PrefixAvgAggregateOutputType = {
    id: number | null
  }

  export type PrefixSumAggregateOutputType = {
    id: number | null
  }

  export type PrefixMinAggregateOutputType = {
    id: number | null
    text: string | null
  }

  export type PrefixMaxAggregateOutputType = {
    id: number | null
    text: string | null
  }

  export type PrefixCountAggregateOutputType = {
    id: number
    text: number
    _all: number
  }


  export type PrefixAvgAggregateInputType = {
    id?: true
  }

  export type PrefixSumAggregateInputType = {
    id?: true
  }

  export type PrefixMinAggregateInputType = {
    id?: true
    text?: true
  }

  export type PrefixMaxAggregateInputType = {
    id?: true
    text?: true
  }

  export type PrefixCountAggregateInputType = {
    id?: true
    text?: true
    _all?: true
  }

  export type PrefixAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prefix to aggregate.
     */
    where?: prefixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prefixes to fetch.
     */
    orderBy?: prefixOrderByWithRelationInput | prefixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: prefixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prefixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prefixes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned prefixes
    **/
    _count?: true | PrefixCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrefixAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrefixSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrefixMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrefixMaxAggregateInputType
  }

  export type GetPrefixAggregateType<T extends PrefixAggregateArgs> = {
        [P in keyof T & keyof AggregatePrefix]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrefix[P]>
      : GetScalarType<T[P], AggregatePrefix[P]>
  }




  export type prefixGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prefixWhereInput
    orderBy?: prefixOrderByWithAggregationInput | prefixOrderByWithAggregationInput[]
    by: PrefixScalarFieldEnum[] | PrefixScalarFieldEnum
    having?: prefixScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrefixCountAggregateInputType | true
    _avg?: PrefixAvgAggregateInputType
    _sum?: PrefixSumAggregateInputType
    _min?: PrefixMinAggregateInputType
    _max?: PrefixMaxAggregateInputType
  }

  export type PrefixGroupByOutputType = {
    id: number
    text: string | null
    _count: PrefixCountAggregateOutputType | null
    _avg: PrefixAvgAggregateOutputType | null
    _sum: PrefixSumAggregateOutputType | null
    _min: PrefixMinAggregateOutputType | null
    _max: PrefixMaxAggregateOutputType | null
  }

  type GetPrefixGroupByPayload<T extends prefixGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrefixGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrefixGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrefixGroupByOutputType[P]>
            : GetScalarType<T[P], PrefixGroupByOutputType[P]>
        }
      >
    >


  export type prefixSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    users?: boolean | prefix$usersArgs<ExtArgs>
    _count?: boolean | PrefixCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prefix"]>



  export type prefixSelectScalar = {
    id?: boolean
    text?: boolean
  }

  export type prefixOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text", ExtArgs["result"]["prefix"]>
  export type prefixInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | prefix$usersArgs<ExtArgs>
    _count?: boolean | PrefixCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $prefixPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "prefix"
    objects: {
      users: Prisma.$userPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string | null
    }, ExtArgs["result"]["prefix"]>
    composites: {}
  }

  type prefixGetPayload<S extends boolean | null | undefined | prefixDefaultArgs> = $Result.GetResult<Prisma.$prefixPayload, S>

  type prefixCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<prefixFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrefixCountAggregateInputType | true
    }

  export interface prefixDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['prefix'], meta: { name: 'prefix' } }
    /**
     * Find zero or one Prefix that matches the filter.
     * @param {prefixFindUniqueArgs} args - Arguments to find a Prefix
     * @example
     * // Get one Prefix
     * const prefix = await prisma.prefix.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends prefixFindUniqueArgs>(args: SelectSubset<T, prefixFindUniqueArgs<ExtArgs>>): Prisma__prefixClient<$Result.GetResult<Prisma.$prefixPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prefix that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {prefixFindUniqueOrThrowArgs} args - Arguments to find a Prefix
     * @example
     * // Get one Prefix
     * const prefix = await prisma.prefix.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends prefixFindUniqueOrThrowArgs>(args: SelectSubset<T, prefixFindUniqueOrThrowArgs<ExtArgs>>): Prisma__prefixClient<$Result.GetResult<Prisma.$prefixPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prefix that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prefixFindFirstArgs} args - Arguments to find a Prefix
     * @example
     * // Get one Prefix
     * const prefix = await prisma.prefix.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends prefixFindFirstArgs>(args?: SelectSubset<T, prefixFindFirstArgs<ExtArgs>>): Prisma__prefixClient<$Result.GetResult<Prisma.$prefixPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prefix that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prefixFindFirstOrThrowArgs} args - Arguments to find a Prefix
     * @example
     * // Get one Prefix
     * const prefix = await prisma.prefix.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends prefixFindFirstOrThrowArgs>(args?: SelectSubset<T, prefixFindFirstOrThrowArgs<ExtArgs>>): Prisma__prefixClient<$Result.GetResult<Prisma.$prefixPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prefixes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prefixFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prefixes
     * const prefixes = await prisma.prefix.findMany()
     * 
     * // Get first 10 Prefixes
     * const prefixes = await prisma.prefix.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prefixWithIdOnly = await prisma.prefix.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends prefixFindManyArgs>(args?: SelectSubset<T, prefixFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prefixPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prefix.
     * @param {prefixCreateArgs} args - Arguments to create a Prefix.
     * @example
     * // Create one Prefix
     * const Prefix = await prisma.prefix.create({
     *   data: {
     *     // ... data to create a Prefix
     *   }
     * })
     * 
     */
    create<T extends prefixCreateArgs>(args: SelectSubset<T, prefixCreateArgs<ExtArgs>>): Prisma__prefixClient<$Result.GetResult<Prisma.$prefixPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prefixes.
     * @param {prefixCreateManyArgs} args - Arguments to create many Prefixes.
     * @example
     * // Create many Prefixes
     * const prefix = await prisma.prefix.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends prefixCreateManyArgs>(args?: SelectSubset<T, prefixCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Prefix.
     * @param {prefixDeleteArgs} args - Arguments to delete one Prefix.
     * @example
     * // Delete one Prefix
     * const Prefix = await prisma.prefix.delete({
     *   where: {
     *     // ... filter to delete one Prefix
     *   }
     * })
     * 
     */
    delete<T extends prefixDeleteArgs>(args: SelectSubset<T, prefixDeleteArgs<ExtArgs>>): Prisma__prefixClient<$Result.GetResult<Prisma.$prefixPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prefix.
     * @param {prefixUpdateArgs} args - Arguments to update one Prefix.
     * @example
     * // Update one Prefix
     * const prefix = await prisma.prefix.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends prefixUpdateArgs>(args: SelectSubset<T, prefixUpdateArgs<ExtArgs>>): Prisma__prefixClient<$Result.GetResult<Prisma.$prefixPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prefixes.
     * @param {prefixDeleteManyArgs} args - Arguments to filter Prefixes to delete.
     * @example
     * // Delete a few Prefixes
     * const { count } = await prisma.prefix.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends prefixDeleteManyArgs>(args?: SelectSubset<T, prefixDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prefixes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prefixUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prefixes
     * const prefix = await prisma.prefix.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends prefixUpdateManyArgs>(args: SelectSubset<T, prefixUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Prefix.
     * @param {prefixUpsertArgs} args - Arguments to update or create a Prefix.
     * @example
     * // Update or create a Prefix
     * const prefix = await prisma.prefix.upsert({
     *   create: {
     *     // ... data to create a Prefix
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prefix we want to update
     *   }
     * })
     */
    upsert<T extends prefixUpsertArgs>(args: SelectSubset<T, prefixUpsertArgs<ExtArgs>>): Prisma__prefixClient<$Result.GetResult<Prisma.$prefixPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prefixes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prefixCountArgs} args - Arguments to filter Prefixes to count.
     * @example
     * // Count the number of Prefixes
     * const count = await prisma.prefix.count({
     *   where: {
     *     // ... the filter for the Prefixes we want to count
     *   }
     * })
    **/
    count<T extends prefixCountArgs>(
      args?: Subset<T, prefixCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrefixCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prefix.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrefixAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrefixAggregateArgs>(args: Subset<T, PrefixAggregateArgs>): Prisma.PrismaPromise<GetPrefixAggregateType<T>>

    /**
     * Group by Prefix.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prefixGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends prefixGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: prefixGroupByArgs['orderBy'] }
        : { orderBy?: prefixGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, prefixGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrefixGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the prefix model
   */
  readonly fields: prefixFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for prefix.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__prefixClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends prefix$usersArgs<ExtArgs> = {}>(args?: Subset<T, prefix$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the prefix model
   */
  interface prefixFieldRefs {
    readonly id: FieldRef<"prefix", 'Int'>
    readonly text: FieldRef<"prefix", 'String'>
  }
    

  // Custom InputTypes
  /**
   * prefix findUnique
   */
  export type prefixFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefix
     */
    select?: prefixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefix
     */
    omit?: prefixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prefixInclude<ExtArgs> | null
    /**
     * Filter, which prefix to fetch.
     */
    where: prefixWhereUniqueInput
  }

  /**
   * prefix findUniqueOrThrow
   */
  export type prefixFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefix
     */
    select?: prefixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefix
     */
    omit?: prefixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prefixInclude<ExtArgs> | null
    /**
     * Filter, which prefix to fetch.
     */
    where: prefixWhereUniqueInput
  }

  /**
   * prefix findFirst
   */
  export type prefixFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefix
     */
    select?: prefixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefix
     */
    omit?: prefixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prefixInclude<ExtArgs> | null
    /**
     * Filter, which prefix to fetch.
     */
    where?: prefixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prefixes to fetch.
     */
    orderBy?: prefixOrderByWithRelationInput | prefixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prefixes.
     */
    cursor?: prefixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prefixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prefixes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prefixes.
     */
    distinct?: PrefixScalarFieldEnum | PrefixScalarFieldEnum[]
  }

  /**
   * prefix findFirstOrThrow
   */
  export type prefixFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefix
     */
    select?: prefixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefix
     */
    omit?: prefixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prefixInclude<ExtArgs> | null
    /**
     * Filter, which prefix to fetch.
     */
    where?: prefixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prefixes to fetch.
     */
    orderBy?: prefixOrderByWithRelationInput | prefixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prefixes.
     */
    cursor?: prefixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prefixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prefixes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prefixes.
     */
    distinct?: PrefixScalarFieldEnum | PrefixScalarFieldEnum[]
  }

  /**
   * prefix findMany
   */
  export type prefixFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefix
     */
    select?: prefixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefix
     */
    omit?: prefixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prefixInclude<ExtArgs> | null
    /**
     * Filter, which prefixes to fetch.
     */
    where?: prefixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prefixes to fetch.
     */
    orderBy?: prefixOrderByWithRelationInput | prefixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing prefixes.
     */
    cursor?: prefixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prefixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prefixes.
     */
    skip?: number
    distinct?: PrefixScalarFieldEnum | PrefixScalarFieldEnum[]
  }

  /**
   * prefix create
   */
  export type prefixCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefix
     */
    select?: prefixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefix
     */
    omit?: prefixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prefixInclude<ExtArgs> | null
    /**
     * The data needed to create a prefix.
     */
    data?: XOR<prefixCreateInput, prefixUncheckedCreateInput>
  }

  /**
   * prefix createMany
   */
  export type prefixCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many prefixes.
     */
    data: prefixCreateManyInput | prefixCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prefix update
   */
  export type prefixUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefix
     */
    select?: prefixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefix
     */
    omit?: prefixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prefixInclude<ExtArgs> | null
    /**
     * The data needed to update a prefix.
     */
    data: XOR<prefixUpdateInput, prefixUncheckedUpdateInput>
    /**
     * Choose, which prefix to update.
     */
    where: prefixWhereUniqueInput
  }

  /**
   * prefix updateMany
   */
  export type prefixUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update prefixes.
     */
    data: XOR<prefixUpdateManyMutationInput, prefixUncheckedUpdateManyInput>
    /**
     * Filter which prefixes to update
     */
    where?: prefixWhereInput
    /**
     * Limit how many prefixes to update.
     */
    limit?: number
  }

  /**
   * prefix upsert
   */
  export type prefixUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefix
     */
    select?: prefixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefix
     */
    omit?: prefixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prefixInclude<ExtArgs> | null
    /**
     * The filter to search for the prefix to update in case it exists.
     */
    where: prefixWhereUniqueInput
    /**
     * In case the prefix found by the `where` argument doesn't exist, create a new prefix with this data.
     */
    create: XOR<prefixCreateInput, prefixUncheckedCreateInput>
    /**
     * In case the prefix was found with the provided `where` argument, update it with this data.
     */
    update: XOR<prefixUpdateInput, prefixUncheckedUpdateInput>
  }

  /**
   * prefix delete
   */
  export type prefixDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefix
     */
    select?: prefixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefix
     */
    omit?: prefixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prefixInclude<ExtArgs> | null
    /**
     * Filter which prefix to delete.
     */
    where: prefixWhereUniqueInput
  }

  /**
   * prefix deleteMany
   */
  export type prefixDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prefixes to delete
     */
    where?: prefixWhereInput
    /**
     * Limit how many prefixes to delete.
     */
    limit?: number
  }

  /**
   * prefix.users
   */
  export type prefix$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * prefix without action
   */
  export type prefixDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefix
     */
    select?: prefixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefix
     */
    omit?: prefixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prefixInclude<ExtArgs> | null
  }


  /**
   * Model image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    Img: string | null
    date: Date | null
    userId: number | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    Img: string | null
    date: Date | null
    userId: number | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    Img: number
    date: number
    userId: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    Img?: true
    date?: true
    userId?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    Img?: true
    date?: true
    userId?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    Img?: true
    date?: true
    userId?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which image to aggregate.
     */
    where?: imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imageOrderByWithRelationInput | imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type imageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: imageWhereInput
    orderBy?: imageOrderByWithAggregationInput | imageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: imageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: number
    Img: string | null
    date: Date
    userId: number
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends imageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type imageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Img?: boolean
    date?: boolean
    userId?: boolean
    users?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>



  export type imageSelectScalar = {
    id?: boolean
    Img?: boolean
    date?: boolean
    userId?: boolean
  }

  export type imageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Img" | "date" | "userId", ExtArgs["result"]["image"]>
  export type imageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $imagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "image"
    objects: {
      users: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Img: string | null
      date: Date
      userId: number
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type imageGetPayload<S extends boolean | null | undefined | imageDefaultArgs> = $Result.GetResult<Prisma.$imagePayload, S>

  type imageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<imageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface imageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['image'], meta: { name: 'image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {imageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends imageFindUniqueArgs>(args: SelectSubset<T, imageFindUniqueArgs<ExtArgs>>): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {imageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends imageFindUniqueOrThrowArgs>(args: SelectSubset<T, imageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends imageFindFirstArgs>(args?: SelectSubset<T, imageFindFirstArgs<ExtArgs>>): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends imageFindFirstOrThrowArgs>(args?: SelectSubset<T, imageFindFirstOrThrowArgs<ExtArgs>>): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends imageFindManyArgs>(args?: SelectSubset<T, imageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {imageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends imageCreateArgs>(args: SelectSubset<T, imageCreateArgs<ExtArgs>>): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {imageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends imageCreateManyArgs>(args?: SelectSubset<T, imageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Image.
     * @param {imageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends imageDeleteArgs>(args: SelectSubset<T, imageDeleteArgs<ExtArgs>>): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {imageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends imageUpdateArgs>(args: SelectSubset<T, imageUpdateArgs<ExtArgs>>): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {imageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends imageDeleteManyArgs>(args?: SelectSubset<T, imageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends imageUpdateManyArgs>(args: SelectSubset<T, imageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {imageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends imageUpsertArgs>(args: SelectSubset<T, imageUpsertArgs<ExtArgs>>): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends imageCountArgs>(
      args?: Subset<T, imageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends imageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: imageGroupByArgs['orderBy'] }
        : { orderBy?: imageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, imageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the image model
   */
  readonly fields: imageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__imageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the image model
   */
  interface imageFieldRefs {
    readonly id: FieldRef<"image", 'Int'>
    readonly Img: FieldRef<"image", 'String'>
    readonly date: FieldRef<"image", 'DateTime'>
    readonly userId: FieldRef<"image", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * image findUnique
   */
  export type imageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageInclude<ExtArgs> | null
    /**
     * Filter, which image to fetch.
     */
    where: imageWhereUniqueInput
  }

  /**
   * image findUniqueOrThrow
   */
  export type imageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageInclude<ExtArgs> | null
    /**
     * Filter, which image to fetch.
     */
    where: imageWhereUniqueInput
  }

  /**
   * image findFirst
   */
  export type imageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageInclude<ExtArgs> | null
    /**
     * Filter, which image to fetch.
     */
    where?: imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imageOrderByWithRelationInput | imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for images.
     */
    cursor?: imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * image findFirstOrThrow
   */
  export type imageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageInclude<ExtArgs> | null
    /**
     * Filter, which image to fetch.
     */
    where?: imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imageOrderByWithRelationInput | imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for images.
     */
    cursor?: imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * image findMany
   */
  export type imageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where?: imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imageOrderByWithRelationInput | imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing images.
     */
    cursor?: imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * image create
   */
  export type imageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageInclude<ExtArgs> | null
    /**
     * The data needed to create a image.
     */
    data: XOR<imageCreateInput, imageUncheckedCreateInput>
  }

  /**
   * image createMany
   */
  export type imageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many images.
     */
    data: imageCreateManyInput | imageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * image update
   */
  export type imageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageInclude<ExtArgs> | null
    /**
     * The data needed to update a image.
     */
    data: XOR<imageUpdateInput, imageUncheckedUpdateInput>
    /**
     * Choose, which image to update.
     */
    where: imageWhereUniqueInput
  }

  /**
   * image updateMany
   */
  export type imageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update images.
     */
    data: XOR<imageUpdateManyMutationInput, imageUncheckedUpdateManyInput>
    /**
     * Filter which images to update
     */
    where?: imageWhereInput
    /**
     * Limit how many images to update.
     */
    limit?: number
  }

  /**
   * image upsert
   */
  export type imageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageInclude<ExtArgs> | null
    /**
     * The filter to search for the image to update in case it exists.
     */
    where: imageWhereUniqueInput
    /**
     * In case the image found by the `where` argument doesn't exist, create a new image with this data.
     */
    create: XOR<imageCreateInput, imageUncheckedCreateInput>
    /**
     * In case the image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<imageUpdateInput, imageUncheckedUpdateInput>
  }

  /**
   * image delete
   */
  export type imageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageInclude<ExtArgs> | null
    /**
     * Filter which image to delete.
     */
    where: imageWhereUniqueInput
  }

  /**
   * image deleteMany
   */
  export type imageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which images to delete
     */
    where?: imageWhereInput
    /**
     * Limit how many images to delete.
     */
    limit?: number
  }

  /**
   * image without action
   */
  export type imageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fname: 'fname',
    lname: 'lname',
    preId: 'preId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PrefixScalarFieldEnum: {
    id: 'id',
    text: 'text'
  };

  export type PrefixScalarFieldEnum = (typeof PrefixScalarFieldEnum)[keyof typeof PrefixScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    Img: 'Img',
    date: 'date',
    userId: 'userId'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const userOrderByRelevanceFieldEnum: {
    fname: 'fname',
    lname: 'lname'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const prefixOrderByRelevanceFieldEnum: {
    text: 'text'
  };

  export type prefixOrderByRelevanceFieldEnum = (typeof prefixOrderByRelevanceFieldEnum)[keyof typeof prefixOrderByRelevanceFieldEnum]


  export const imageOrderByRelevanceFieldEnum: {
    Img: 'Img'
  };

  export type imageOrderByRelevanceFieldEnum = (typeof imageOrderByRelevanceFieldEnum)[keyof typeof imageOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    fname?: StringFilter<"user"> | string
    lname?: StringNullableFilter<"user"> | string | null
    preId?: IntFilter<"user"> | number
    prefixId?: XOR<PrefixScalarRelationFilter, prefixWhereInput>
    images?: ImageListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    fname?: SortOrder
    lname?: SortOrderInput | SortOrder
    preId?: SortOrder
    prefixId?: prefixOrderByWithRelationInput
    images?: imageOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    fname?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    lname?: StringNullableFilter<"user"> | string | null
    preId?: IntFilter<"user"> | number
    prefixId?: XOR<PrefixScalarRelationFilter, prefixWhereInput>
    images?: ImageListRelationFilter
  }, "id" | "fname">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    fname?: SortOrder
    lname?: SortOrderInput | SortOrder
    preId?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    fname?: StringWithAggregatesFilter<"user"> | string
    lname?: StringNullableWithAggregatesFilter<"user"> | string | null
    preId?: IntWithAggregatesFilter<"user"> | number
  }

  export type prefixWhereInput = {
    AND?: prefixWhereInput | prefixWhereInput[]
    OR?: prefixWhereInput[]
    NOT?: prefixWhereInput | prefixWhereInput[]
    id?: IntFilter<"prefix"> | number
    text?: StringNullableFilter<"prefix"> | string | null
    users?: UserListRelationFilter
  }

  export type prefixOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrderInput | SortOrder
    users?: userOrderByRelationAggregateInput
    _relevance?: prefixOrderByRelevanceInput
  }

  export type prefixWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: prefixWhereInput | prefixWhereInput[]
    OR?: prefixWhereInput[]
    NOT?: prefixWhereInput | prefixWhereInput[]
    text?: StringNullableFilter<"prefix"> | string | null
    users?: UserListRelationFilter
  }, "id">

  export type prefixOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrderInput | SortOrder
    _count?: prefixCountOrderByAggregateInput
    _avg?: prefixAvgOrderByAggregateInput
    _max?: prefixMaxOrderByAggregateInput
    _min?: prefixMinOrderByAggregateInput
    _sum?: prefixSumOrderByAggregateInput
  }

  export type prefixScalarWhereWithAggregatesInput = {
    AND?: prefixScalarWhereWithAggregatesInput | prefixScalarWhereWithAggregatesInput[]
    OR?: prefixScalarWhereWithAggregatesInput[]
    NOT?: prefixScalarWhereWithAggregatesInput | prefixScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"prefix"> | number
    text?: StringNullableWithAggregatesFilter<"prefix"> | string | null
  }

  export type imageWhereInput = {
    AND?: imageWhereInput | imageWhereInput[]
    OR?: imageWhereInput[]
    NOT?: imageWhereInput | imageWhereInput[]
    id?: IntFilter<"image"> | number
    Img?: StringNullableFilter<"image"> | string | null
    date?: DateTimeFilter<"image"> | Date | string
    userId?: IntFilter<"image"> | number
    users?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type imageOrderByWithRelationInput = {
    id?: SortOrder
    Img?: SortOrderInput | SortOrder
    date?: SortOrder
    userId?: SortOrder
    users?: userOrderByWithRelationInput
    _relevance?: imageOrderByRelevanceInput
  }

  export type imageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: imageWhereInput | imageWhereInput[]
    OR?: imageWhereInput[]
    NOT?: imageWhereInput | imageWhereInput[]
    Img?: StringNullableFilter<"image"> | string | null
    date?: DateTimeFilter<"image"> | Date | string
    userId?: IntFilter<"image"> | number
    users?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type imageOrderByWithAggregationInput = {
    id?: SortOrder
    Img?: SortOrderInput | SortOrder
    date?: SortOrder
    userId?: SortOrder
    _count?: imageCountOrderByAggregateInput
    _avg?: imageAvgOrderByAggregateInput
    _max?: imageMaxOrderByAggregateInput
    _min?: imageMinOrderByAggregateInput
    _sum?: imageSumOrderByAggregateInput
  }

  export type imageScalarWhereWithAggregatesInput = {
    AND?: imageScalarWhereWithAggregatesInput | imageScalarWhereWithAggregatesInput[]
    OR?: imageScalarWhereWithAggregatesInput[]
    NOT?: imageScalarWhereWithAggregatesInput | imageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"image"> | number
    Img?: StringNullableWithAggregatesFilter<"image"> | string | null
    date?: DateTimeWithAggregatesFilter<"image"> | Date | string
    userId?: IntWithAggregatesFilter<"image"> | number
  }

  export type userCreateInput = {
    fname: string
    lname?: string | null
    prefixId: prefixCreateNestedOneWithoutUsersInput
    images?: imageCreateNestedManyWithoutUsersInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    fname: string
    lname?: string | null
    preId: number
    images?: imageUncheckedCreateNestedManyWithoutUsersInput
  }

  export type userUpdateInput = {
    fname?: StringFieldUpdateOperationsInput | string
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    prefixId?: prefixUpdateOneRequiredWithoutUsersNestedInput
    images?: imageUpdateManyWithoutUsersNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fname?: StringFieldUpdateOperationsInput | string
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    preId?: IntFieldUpdateOperationsInput | number
    images?: imageUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    fname: string
    lname?: string | null
    preId: number
  }

  export type userUpdateManyMutationInput = {
    fname?: StringFieldUpdateOperationsInput | string
    lname?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fname?: StringFieldUpdateOperationsInput | string
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    preId?: IntFieldUpdateOperationsInput | number
  }

  export type prefixCreateInput = {
    text?: string | null
    users?: userCreateNestedManyWithoutPrefixIdInput
  }

  export type prefixUncheckedCreateInput = {
    id?: number
    text?: string | null
    users?: userUncheckedCreateNestedManyWithoutPrefixIdInput
  }

  export type prefixUpdateInput = {
    text?: NullableStringFieldUpdateOperationsInput | string | null
    users?: userUpdateManyWithoutPrefixIdNestedInput
  }

  export type prefixUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    users?: userUncheckedUpdateManyWithoutPrefixIdNestedInput
  }

  export type prefixCreateManyInput = {
    id?: number
    text?: string | null
  }

  export type prefixUpdateManyMutationInput = {
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type prefixUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type imageCreateInput = {
    Img?: string | null
    date: Date | string
    users: userCreateNestedOneWithoutImagesInput
  }

  export type imageUncheckedCreateInput = {
    id?: number
    Img?: string | null
    date: Date | string
    userId: number
  }

  export type imageUpdateInput = {
    Img?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: userUpdateOneRequiredWithoutImagesNestedInput
  }

  export type imageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Img?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type imageCreateManyInput = {
    id?: number
    Img?: string | null
    date: Date | string
    userId: number
  }

  export type imageUpdateManyMutationInput = {
    Img?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type imageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Img?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PrefixScalarRelationFilter = {
    is?: prefixWhereInput
    isNot?: prefixWhereInput
  }

  export type ImageListRelationFilter = {
    every?: imageWhereInput
    some?: imageWhereInput
    none?: imageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type imageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    preId?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
    preId?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    preId?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    preId?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
    preId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: userWhereInput
    some?: userWhereInput
    none?: userWhereInput
  }

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type prefixOrderByRelevanceInput = {
    fields: prefixOrderByRelevanceFieldEnum | prefixOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type prefixCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
  }

  export type prefixAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type prefixMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
  }

  export type prefixMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
  }

  export type prefixSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type imageOrderByRelevanceInput = {
    fields: imageOrderByRelevanceFieldEnum | imageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type imageCountOrderByAggregateInput = {
    id?: SortOrder
    Img?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type imageAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type imageMaxOrderByAggregateInput = {
    id?: SortOrder
    Img?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type imageMinOrderByAggregateInput = {
    id?: SortOrder
    Img?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type imageSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type prefixCreateNestedOneWithoutUsersInput = {
    create?: XOR<prefixCreateWithoutUsersInput, prefixUncheckedCreateWithoutUsersInput>
    connectOrCreate?: prefixCreateOrConnectWithoutUsersInput
    connect?: prefixWhereUniqueInput
  }

  export type imageCreateNestedManyWithoutUsersInput = {
    create?: XOR<imageCreateWithoutUsersInput, imageUncheckedCreateWithoutUsersInput> | imageCreateWithoutUsersInput[] | imageUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: imageCreateOrConnectWithoutUsersInput | imageCreateOrConnectWithoutUsersInput[]
    createMany?: imageCreateManyUsersInputEnvelope
    connect?: imageWhereUniqueInput | imageWhereUniqueInput[]
  }

  export type imageUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<imageCreateWithoutUsersInput, imageUncheckedCreateWithoutUsersInput> | imageCreateWithoutUsersInput[] | imageUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: imageCreateOrConnectWithoutUsersInput | imageCreateOrConnectWithoutUsersInput[]
    createMany?: imageCreateManyUsersInputEnvelope
    connect?: imageWhereUniqueInput | imageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type prefixUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<prefixCreateWithoutUsersInput, prefixUncheckedCreateWithoutUsersInput>
    connectOrCreate?: prefixCreateOrConnectWithoutUsersInput
    upsert?: prefixUpsertWithoutUsersInput
    connect?: prefixWhereUniqueInput
    update?: XOR<XOR<prefixUpdateToOneWithWhereWithoutUsersInput, prefixUpdateWithoutUsersInput>, prefixUncheckedUpdateWithoutUsersInput>
  }

  export type imageUpdateManyWithoutUsersNestedInput = {
    create?: XOR<imageCreateWithoutUsersInput, imageUncheckedCreateWithoutUsersInput> | imageCreateWithoutUsersInput[] | imageUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: imageCreateOrConnectWithoutUsersInput | imageCreateOrConnectWithoutUsersInput[]
    upsert?: imageUpsertWithWhereUniqueWithoutUsersInput | imageUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: imageCreateManyUsersInputEnvelope
    set?: imageWhereUniqueInput | imageWhereUniqueInput[]
    disconnect?: imageWhereUniqueInput | imageWhereUniqueInput[]
    delete?: imageWhereUniqueInput | imageWhereUniqueInput[]
    connect?: imageWhereUniqueInput | imageWhereUniqueInput[]
    update?: imageUpdateWithWhereUniqueWithoutUsersInput | imageUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: imageUpdateManyWithWhereWithoutUsersInput | imageUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: imageScalarWhereInput | imageScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type imageUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<imageCreateWithoutUsersInput, imageUncheckedCreateWithoutUsersInput> | imageCreateWithoutUsersInput[] | imageUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: imageCreateOrConnectWithoutUsersInput | imageCreateOrConnectWithoutUsersInput[]
    upsert?: imageUpsertWithWhereUniqueWithoutUsersInput | imageUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: imageCreateManyUsersInputEnvelope
    set?: imageWhereUniqueInput | imageWhereUniqueInput[]
    disconnect?: imageWhereUniqueInput | imageWhereUniqueInput[]
    delete?: imageWhereUniqueInput | imageWhereUniqueInput[]
    connect?: imageWhereUniqueInput | imageWhereUniqueInput[]
    update?: imageUpdateWithWhereUniqueWithoutUsersInput | imageUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: imageUpdateManyWithWhereWithoutUsersInput | imageUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: imageScalarWhereInput | imageScalarWhereInput[]
  }

  export type userCreateNestedManyWithoutPrefixIdInput = {
    create?: XOR<userCreateWithoutPrefixIdInput, userUncheckedCreateWithoutPrefixIdInput> | userCreateWithoutPrefixIdInput[] | userUncheckedCreateWithoutPrefixIdInput[]
    connectOrCreate?: userCreateOrConnectWithoutPrefixIdInput | userCreateOrConnectWithoutPrefixIdInput[]
    createMany?: userCreateManyPrefixIdInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type userUncheckedCreateNestedManyWithoutPrefixIdInput = {
    create?: XOR<userCreateWithoutPrefixIdInput, userUncheckedCreateWithoutPrefixIdInput> | userCreateWithoutPrefixIdInput[] | userUncheckedCreateWithoutPrefixIdInput[]
    connectOrCreate?: userCreateOrConnectWithoutPrefixIdInput | userCreateOrConnectWithoutPrefixIdInput[]
    createMany?: userCreateManyPrefixIdInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type userUpdateManyWithoutPrefixIdNestedInput = {
    create?: XOR<userCreateWithoutPrefixIdInput, userUncheckedCreateWithoutPrefixIdInput> | userCreateWithoutPrefixIdInput[] | userUncheckedCreateWithoutPrefixIdInput[]
    connectOrCreate?: userCreateOrConnectWithoutPrefixIdInput | userCreateOrConnectWithoutPrefixIdInput[]
    upsert?: userUpsertWithWhereUniqueWithoutPrefixIdInput | userUpsertWithWhereUniqueWithoutPrefixIdInput[]
    createMany?: userCreateManyPrefixIdInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutPrefixIdInput | userUpdateWithWhereUniqueWithoutPrefixIdInput[]
    updateMany?: userUpdateManyWithWhereWithoutPrefixIdInput | userUpdateManyWithWhereWithoutPrefixIdInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type userUncheckedUpdateManyWithoutPrefixIdNestedInput = {
    create?: XOR<userCreateWithoutPrefixIdInput, userUncheckedCreateWithoutPrefixIdInput> | userCreateWithoutPrefixIdInput[] | userUncheckedCreateWithoutPrefixIdInput[]
    connectOrCreate?: userCreateOrConnectWithoutPrefixIdInput | userCreateOrConnectWithoutPrefixIdInput[]
    upsert?: userUpsertWithWhereUniqueWithoutPrefixIdInput | userUpsertWithWhereUniqueWithoutPrefixIdInput[]
    createMany?: userCreateManyPrefixIdInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutPrefixIdInput | userUpdateWithWhereUniqueWithoutPrefixIdInput[]
    updateMany?: userUpdateManyWithWhereWithoutPrefixIdInput | userUpdateManyWithWhereWithoutPrefixIdInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutImagesInput = {
    create?: XOR<userCreateWithoutImagesInput, userUncheckedCreateWithoutImagesInput>
    connectOrCreate?: userCreateOrConnectWithoutImagesInput
    connect?: userWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type userUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<userCreateWithoutImagesInput, userUncheckedCreateWithoutImagesInput>
    connectOrCreate?: userCreateOrConnectWithoutImagesInput
    upsert?: userUpsertWithoutImagesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutImagesInput, userUpdateWithoutImagesInput>, userUncheckedUpdateWithoutImagesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type prefixCreateWithoutUsersInput = {
    text?: string | null
  }

  export type prefixUncheckedCreateWithoutUsersInput = {
    id?: number
    text?: string | null
  }

  export type prefixCreateOrConnectWithoutUsersInput = {
    where: prefixWhereUniqueInput
    create: XOR<prefixCreateWithoutUsersInput, prefixUncheckedCreateWithoutUsersInput>
  }

  export type imageCreateWithoutUsersInput = {
    Img?: string | null
    date: Date | string
  }

  export type imageUncheckedCreateWithoutUsersInput = {
    id?: number
    Img?: string | null
    date: Date | string
  }

  export type imageCreateOrConnectWithoutUsersInput = {
    where: imageWhereUniqueInput
    create: XOR<imageCreateWithoutUsersInput, imageUncheckedCreateWithoutUsersInput>
  }

  export type imageCreateManyUsersInputEnvelope = {
    data: imageCreateManyUsersInput | imageCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type prefixUpsertWithoutUsersInput = {
    update: XOR<prefixUpdateWithoutUsersInput, prefixUncheckedUpdateWithoutUsersInput>
    create: XOR<prefixCreateWithoutUsersInput, prefixUncheckedCreateWithoutUsersInput>
    where?: prefixWhereInput
  }

  export type prefixUpdateToOneWithWhereWithoutUsersInput = {
    where?: prefixWhereInput
    data: XOR<prefixUpdateWithoutUsersInput, prefixUncheckedUpdateWithoutUsersInput>
  }

  export type prefixUpdateWithoutUsersInput = {
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type prefixUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type imageUpsertWithWhereUniqueWithoutUsersInput = {
    where: imageWhereUniqueInput
    update: XOR<imageUpdateWithoutUsersInput, imageUncheckedUpdateWithoutUsersInput>
    create: XOR<imageCreateWithoutUsersInput, imageUncheckedCreateWithoutUsersInput>
  }

  export type imageUpdateWithWhereUniqueWithoutUsersInput = {
    where: imageWhereUniqueInput
    data: XOR<imageUpdateWithoutUsersInput, imageUncheckedUpdateWithoutUsersInput>
  }

  export type imageUpdateManyWithWhereWithoutUsersInput = {
    where: imageScalarWhereInput
    data: XOR<imageUpdateManyMutationInput, imageUncheckedUpdateManyWithoutUsersInput>
  }

  export type imageScalarWhereInput = {
    AND?: imageScalarWhereInput | imageScalarWhereInput[]
    OR?: imageScalarWhereInput[]
    NOT?: imageScalarWhereInput | imageScalarWhereInput[]
    id?: IntFilter<"image"> | number
    Img?: StringNullableFilter<"image"> | string | null
    date?: DateTimeFilter<"image"> | Date | string
    userId?: IntFilter<"image"> | number
  }

  export type userCreateWithoutPrefixIdInput = {
    fname: string
    lname?: string | null
    images?: imageCreateNestedManyWithoutUsersInput
  }

  export type userUncheckedCreateWithoutPrefixIdInput = {
    id?: number
    fname: string
    lname?: string | null
    images?: imageUncheckedCreateNestedManyWithoutUsersInput
  }

  export type userCreateOrConnectWithoutPrefixIdInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPrefixIdInput, userUncheckedCreateWithoutPrefixIdInput>
  }

  export type userCreateManyPrefixIdInputEnvelope = {
    data: userCreateManyPrefixIdInput | userCreateManyPrefixIdInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithWhereUniqueWithoutPrefixIdInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutPrefixIdInput, userUncheckedUpdateWithoutPrefixIdInput>
    create: XOR<userCreateWithoutPrefixIdInput, userUncheckedCreateWithoutPrefixIdInput>
  }

  export type userUpdateWithWhereUniqueWithoutPrefixIdInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutPrefixIdInput, userUncheckedUpdateWithoutPrefixIdInput>
  }

  export type userUpdateManyWithWhereWithoutPrefixIdInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutPrefixIdInput>
  }

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[]
    OR?: userScalarWhereInput[]
    NOT?: userScalarWhereInput | userScalarWhereInput[]
    id?: IntFilter<"user"> | number
    fname?: StringFilter<"user"> | string
    lname?: StringNullableFilter<"user"> | string | null
    preId?: IntFilter<"user"> | number
  }

  export type userCreateWithoutImagesInput = {
    fname: string
    lname?: string | null
    prefixId: prefixCreateNestedOneWithoutUsersInput
  }

  export type userUncheckedCreateWithoutImagesInput = {
    id?: number
    fname: string
    lname?: string | null
    preId: number
  }

  export type userCreateOrConnectWithoutImagesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutImagesInput, userUncheckedCreateWithoutImagesInput>
  }

  export type userUpsertWithoutImagesInput = {
    update: XOR<userUpdateWithoutImagesInput, userUncheckedUpdateWithoutImagesInput>
    create: XOR<userCreateWithoutImagesInput, userUncheckedCreateWithoutImagesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutImagesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutImagesInput, userUncheckedUpdateWithoutImagesInput>
  }

  export type userUpdateWithoutImagesInput = {
    fname?: StringFieldUpdateOperationsInput | string
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    prefixId?: prefixUpdateOneRequiredWithoutUsersNestedInput
  }

  export type userUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fname?: StringFieldUpdateOperationsInput | string
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    preId?: IntFieldUpdateOperationsInput | number
  }

  export type imageCreateManyUsersInput = {
    id?: number
    Img?: string | null
    date: Date | string
  }

  export type imageUpdateWithoutUsersInput = {
    Img?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type imageUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    Img?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type imageUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    Img?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCreateManyPrefixIdInput = {
    id?: number
    fname: string
    lname?: string | null
  }

  export type userUpdateWithoutPrefixIdInput = {
    fname?: StringFieldUpdateOperationsInput | string
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    images?: imageUpdateManyWithoutUsersNestedInput
  }

  export type userUncheckedUpdateWithoutPrefixIdInput = {
    id?: IntFieldUpdateOperationsInput | number
    fname?: StringFieldUpdateOperationsInput | string
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    images?: imageUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type userUncheckedUpdateManyWithoutPrefixIdInput = {
    id?: IntFieldUpdateOperationsInput | number
    fname?: StringFieldUpdateOperationsInput | string
    lname?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}