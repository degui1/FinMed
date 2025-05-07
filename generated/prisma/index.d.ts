
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
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model FinancingSimulation
 * 
 */
export type FinancingSimulation = $Result.DefaultSelection<Prisma.$FinancingSimulationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Students
 * const students = await prisma.student.findMany()
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
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
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
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.financingSimulation`: Exposes CRUD operations for the **FinancingSimulation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinancingSimulations
    * const financingSimulations = await prisma.financingSimulation.findMany()
    * ```
    */
  get financingSimulation(): Prisma.FinancingSimulationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Student: 'Student',
    FinancingSimulation: 'FinancingSimulation'
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
      modelProps: "student" | "financingSimulation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      FinancingSimulation: {
        payload: Prisma.$FinancingSimulationPayload<ExtArgs>
        fields: Prisma.FinancingSimulationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinancingSimulationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancingSimulationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinancingSimulationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancingSimulationPayload>
          }
          findFirst: {
            args: Prisma.FinancingSimulationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancingSimulationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinancingSimulationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancingSimulationPayload>
          }
          findMany: {
            args: Prisma.FinancingSimulationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancingSimulationPayload>[]
          }
          create: {
            args: Prisma.FinancingSimulationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancingSimulationPayload>
          }
          createMany: {
            args: Prisma.FinancingSimulationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinancingSimulationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancingSimulationPayload>[]
          }
          delete: {
            args: Prisma.FinancingSimulationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancingSimulationPayload>
          }
          update: {
            args: Prisma.FinancingSimulationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancingSimulationPayload>
          }
          deleteMany: {
            args: Prisma.FinancingSimulationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinancingSimulationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinancingSimulationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancingSimulationPayload>[]
          }
          upsert: {
            args: Prisma.FinancingSimulationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancingSimulationPayload>
          }
          aggregate: {
            args: Prisma.FinancingSimulationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinancingSimulation>
          }
          groupBy: {
            args: Prisma.FinancingSimulationGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinancingSimulationGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinancingSimulationCountArgs<ExtArgs>
            result: $Utils.Optional<FinancingSimulationCountAggregateOutputType> | number
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
    student?: StudentOmit
    financingSimulation?: FinancingSimulationOmit
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
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    FinancingSimulation: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FinancingSimulation?: boolean | StudentCountOutputTypeCountFinancingSimulationArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountFinancingSimulationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancingSimulationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    name: string | null
    surname: string | null
    email: string | null
    password: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    surname: string | null
    email: string | null
    password: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    name: number
    surname: number
    email: number
    password: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    email?: true
    password?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    email?: true
    password?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    email?: true
    password?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    name: string
    surname: string
    email: string
    password: string
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    email?: boolean
    password?: boolean
    FinancingSimulation?: boolean | Student$FinancingSimulationArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    name?: boolean
    surname?: boolean
    email?: boolean
    password?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "surname" | "email" | "password", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FinancingSimulation?: boolean | Student$FinancingSimulationArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      FinancingSimulation: Prisma.$FinancingSimulationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      surname: string
      email: string
      password: string
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    FinancingSimulation<T extends Student$FinancingSimulationArgs<ExtArgs> = {}>(args?: Subset<T, Student$FinancingSimulationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancingSimulationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly name: FieldRef<"Student", 'String'>
    readonly surname: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly password: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.FinancingSimulation
   */
  export type Student$FinancingSimulationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancingSimulation
     */
    select?: FinancingSimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancingSimulation
     */
    omit?: FinancingSimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancingSimulationInclude<ExtArgs> | null
    where?: FinancingSimulationWhereInput
    orderBy?: FinancingSimulationOrderByWithRelationInput | FinancingSimulationOrderByWithRelationInput[]
    cursor?: FinancingSimulationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinancingSimulationScalarFieldEnum | FinancingSimulationScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model FinancingSimulation
   */

  export type AggregateFinancingSimulation = {
    _count: FinancingSimulationCountAggregateOutputType | null
    _avg: FinancingSimulationAvgAggregateOutputType | null
    _sum: FinancingSimulationSumAggregateOutputType | null
    _min: FinancingSimulationMinAggregateOutputType | null
    _max: FinancingSimulationMaxAggregateOutputType | null
  }

  export type FinancingSimulationAvgAggregateOutputType = {
    total_amount_cents: number | null
    installments: number | null
    monthly_interest_rate: Decimal | null
    monthly_payment_cents: number | null
  }

  export type FinancingSimulationSumAggregateOutputType = {
    total_amount_cents: number | null
    installments: number | null
    monthly_interest_rate: Decimal | null
    monthly_payment_cents: number | null
  }

  export type FinancingSimulationMinAggregateOutputType = {
    id: string | null
    total_amount_cents: number | null
    installments: number | null
    monthly_interest_rate: Decimal | null
    monthly_payment_cents: number | null
    student_id: string | null
  }

  export type FinancingSimulationMaxAggregateOutputType = {
    id: string | null
    total_amount_cents: number | null
    installments: number | null
    monthly_interest_rate: Decimal | null
    monthly_payment_cents: number | null
    student_id: string | null
  }

  export type FinancingSimulationCountAggregateOutputType = {
    id: number
    total_amount_cents: number
    installments: number
    monthly_interest_rate: number
    monthly_payment_cents: number
    student_id: number
    _all: number
  }


  export type FinancingSimulationAvgAggregateInputType = {
    total_amount_cents?: true
    installments?: true
    monthly_interest_rate?: true
    monthly_payment_cents?: true
  }

  export type FinancingSimulationSumAggregateInputType = {
    total_amount_cents?: true
    installments?: true
    monthly_interest_rate?: true
    monthly_payment_cents?: true
  }

  export type FinancingSimulationMinAggregateInputType = {
    id?: true
    total_amount_cents?: true
    installments?: true
    monthly_interest_rate?: true
    monthly_payment_cents?: true
    student_id?: true
  }

  export type FinancingSimulationMaxAggregateInputType = {
    id?: true
    total_amount_cents?: true
    installments?: true
    monthly_interest_rate?: true
    monthly_payment_cents?: true
    student_id?: true
  }

  export type FinancingSimulationCountAggregateInputType = {
    id?: true
    total_amount_cents?: true
    installments?: true
    monthly_interest_rate?: true
    monthly_payment_cents?: true
    student_id?: true
    _all?: true
  }

  export type FinancingSimulationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancingSimulation to aggregate.
     */
    where?: FinancingSimulationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancingSimulations to fetch.
     */
    orderBy?: FinancingSimulationOrderByWithRelationInput | FinancingSimulationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinancingSimulationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancingSimulations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancingSimulations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinancingSimulations
    **/
    _count?: true | FinancingSimulationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinancingSimulationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinancingSimulationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinancingSimulationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinancingSimulationMaxAggregateInputType
  }

  export type GetFinancingSimulationAggregateType<T extends FinancingSimulationAggregateArgs> = {
        [P in keyof T & keyof AggregateFinancingSimulation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinancingSimulation[P]>
      : GetScalarType<T[P], AggregateFinancingSimulation[P]>
  }




  export type FinancingSimulationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancingSimulationWhereInput
    orderBy?: FinancingSimulationOrderByWithAggregationInput | FinancingSimulationOrderByWithAggregationInput[]
    by: FinancingSimulationScalarFieldEnum[] | FinancingSimulationScalarFieldEnum
    having?: FinancingSimulationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinancingSimulationCountAggregateInputType | true
    _avg?: FinancingSimulationAvgAggregateInputType
    _sum?: FinancingSimulationSumAggregateInputType
    _min?: FinancingSimulationMinAggregateInputType
    _max?: FinancingSimulationMaxAggregateInputType
  }

  export type FinancingSimulationGroupByOutputType = {
    id: string
    total_amount_cents: number
    installments: number
    monthly_interest_rate: Decimal
    monthly_payment_cents: number
    student_id: string
    _count: FinancingSimulationCountAggregateOutputType | null
    _avg: FinancingSimulationAvgAggregateOutputType | null
    _sum: FinancingSimulationSumAggregateOutputType | null
    _min: FinancingSimulationMinAggregateOutputType | null
    _max: FinancingSimulationMaxAggregateOutputType | null
  }

  type GetFinancingSimulationGroupByPayload<T extends FinancingSimulationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinancingSimulationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinancingSimulationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinancingSimulationGroupByOutputType[P]>
            : GetScalarType<T[P], FinancingSimulationGroupByOutputType[P]>
        }
      >
    >


  export type FinancingSimulationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total_amount_cents?: boolean
    installments?: boolean
    monthly_interest_rate?: boolean
    monthly_payment_cents?: boolean
    student_id?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financingSimulation"]>

  export type FinancingSimulationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total_amount_cents?: boolean
    installments?: boolean
    monthly_interest_rate?: boolean
    monthly_payment_cents?: boolean
    student_id?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financingSimulation"]>

  export type FinancingSimulationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total_amount_cents?: boolean
    installments?: boolean
    monthly_interest_rate?: boolean
    monthly_payment_cents?: boolean
    student_id?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financingSimulation"]>

  export type FinancingSimulationSelectScalar = {
    id?: boolean
    total_amount_cents?: boolean
    installments?: boolean
    monthly_interest_rate?: boolean
    monthly_payment_cents?: boolean
    student_id?: boolean
  }

  export type FinancingSimulationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "total_amount_cents" | "installments" | "monthly_interest_rate" | "monthly_payment_cents" | "student_id", ExtArgs["result"]["financingSimulation"]>
  export type FinancingSimulationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type FinancingSimulationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type FinancingSimulationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $FinancingSimulationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinancingSimulation"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      total_amount_cents: number
      installments: number
      monthly_interest_rate: Prisma.Decimal
      monthly_payment_cents: number
      student_id: string
    }, ExtArgs["result"]["financingSimulation"]>
    composites: {}
  }

  type FinancingSimulationGetPayload<S extends boolean | null | undefined | FinancingSimulationDefaultArgs> = $Result.GetResult<Prisma.$FinancingSimulationPayload, S>

  type FinancingSimulationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinancingSimulationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinancingSimulationCountAggregateInputType | true
    }

  export interface FinancingSimulationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinancingSimulation'], meta: { name: 'FinancingSimulation' } }
    /**
     * Find zero or one FinancingSimulation that matches the filter.
     * @param {FinancingSimulationFindUniqueArgs} args - Arguments to find a FinancingSimulation
     * @example
     * // Get one FinancingSimulation
     * const financingSimulation = await prisma.financingSimulation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinancingSimulationFindUniqueArgs>(args: SelectSubset<T, FinancingSimulationFindUniqueArgs<ExtArgs>>): Prisma__FinancingSimulationClient<$Result.GetResult<Prisma.$FinancingSimulationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FinancingSimulation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinancingSimulationFindUniqueOrThrowArgs} args - Arguments to find a FinancingSimulation
     * @example
     * // Get one FinancingSimulation
     * const financingSimulation = await prisma.financingSimulation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinancingSimulationFindUniqueOrThrowArgs>(args: SelectSubset<T, FinancingSimulationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinancingSimulationClient<$Result.GetResult<Prisma.$FinancingSimulationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinancingSimulation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancingSimulationFindFirstArgs} args - Arguments to find a FinancingSimulation
     * @example
     * // Get one FinancingSimulation
     * const financingSimulation = await prisma.financingSimulation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinancingSimulationFindFirstArgs>(args?: SelectSubset<T, FinancingSimulationFindFirstArgs<ExtArgs>>): Prisma__FinancingSimulationClient<$Result.GetResult<Prisma.$FinancingSimulationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinancingSimulation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancingSimulationFindFirstOrThrowArgs} args - Arguments to find a FinancingSimulation
     * @example
     * // Get one FinancingSimulation
     * const financingSimulation = await prisma.financingSimulation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinancingSimulationFindFirstOrThrowArgs>(args?: SelectSubset<T, FinancingSimulationFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinancingSimulationClient<$Result.GetResult<Prisma.$FinancingSimulationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FinancingSimulations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancingSimulationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinancingSimulations
     * const financingSimulations = await prisma.financingSimulation.findMany()
     * 
     * // Get first 10 FinancingSimulations
     * const financingSimulations = await prisma.financingSimulation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financingSimulationWithIdOnly = await prisma.financingSimulation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinancingSimulationFindManyArgs>(args?: SelectSubset<T, FinancingSimulationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancingSimulationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FinancingSimulation.
     * @param {FinancingSimulationCreateArgs} args - Arguments to create a FinancingSimulation.
     * @example
     * // Create one FinancingSimulation
     * const FinancingSimulation = await prisma.financingSimulation.create({
     *   data: {
     *     // ... data to create a FinancingSimulation
     *   }
     * })
     * 
     */
    create<T extends FinancingSimulationCreateArgs>(args: SelectSubset<T, FinancingSimulationCreateArgs<ExtArgs>>): Prisma__FinancingSimulationClient<$Result.GetResult<Prisma.$FinancingSimulationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FinancingSimulations.
     * @param {FinancingSimulationCreateManyArgs} args - Arguments to create many FinancingSimulations.
     * @example
     * // Create many FinancingSimulations
     * const financingSimulation = await prisma.financingSimulation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinancingSimulationCreateManyArgs>(args?: SelectSubset<T, FinancingSimulationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinancingSimulations and returns the data saved in the database.
     * @param {FinancingSimulationCreateManyAndReturnArgs} args - Arguments to create many FinancingSimulations.
     * @example
     * // Create many FinancingSimulations
     * const financingSimulation = await prisma.financingSimulation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinancingSimulations and only return the `id`
     * const financingSimulationWithIdOnly = await prisma.financingSimulation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinancingSimulationCreateManyAndReturnArgs>(args?: SelectSubset<T, FinancingSimulationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancingSimulationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FinancingSimulation.
     * @param {FinancingSimulationDeleteArgs} args - Arguments to delete one FinancingSimulation.
     * @example
     * // Delete one FinancingSimulation
     * const FinancingSimulation = await prisma.financingSimulation.delete({
     *   where: {
     *     // ... filter to delete one FinancingSimulation
     *   }
     * })
     * 
     */
    delete<T extends FinancingSimulationDeleteArgs>(args: SelectSubset<T, FinancingSimulationDeleteArgs<ExtArgs>>): Prisma__FinancingSimulationClient<$Result.GetResult<Prisma.$FinancingSimulationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FinancingSimulation.
     * @param {FinancingSimulationUpdateArgs} args - Arguments to update one FinancingSimulation.
     * @example
     * // Update one FinancingSimulation
     * const financingSimulation = await prisma.financingSimulation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinancingSimulationUpdateArgs>(args: SelectSubset<T, FinancingSimulationUpdateArgs<ExtArgs>>): Prisma__FinancingSimulationClient<$Result.GetResult<Prisma.$FinancingSimulationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FinancingSimulations.
     * @param {FinancingSimulationDeleteManyArgs} args - Arguments to filter FinancingSimulations to delete.
     * @example
     * // Delete a few FinancingSimulations
     * const { count } = await prisma.financingSimulation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinancingSimulationDeleteManyArgs>(args?: SelectSubset<T, FinancingSimulationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancingSimulations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancingSimulationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinancingSimulations
     * const financingSimulation = await prisma.financingSimulation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinancingSimulationUpdateManyArgs>(args: SelectSubset<T, FinancingSimulationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancingSimulations and returns the data updated in the database.
     * @param {FinancingSimulationUpdateManyAndReturnArgs} args - Arguments to update many FinancingSimulations.
     * @example
     * // Update many FinancingSimulations
     * const financingSimulation = await prisma.financingSimulation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FinancingSimulations and only return the `id`
     * const financingSimulationWithIdOnly = await prisma.financingSimulation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FinancingSimulationUpdateManyAndReturnArgs>(args: SelectSubset<T, FinancingSimulationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancingSimulationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FinancingSimulation.
     * @param {FinancingSimulationUpsertArgs} args - Arguments to update or create a FinancingSimulation.
     * @example
     * // Update or create a FinancingSimulation
     * const financingSimulation = await prisma.financingSimulation.upsert({
     *   create: {
     *     // ... data to create a FinancingSimulation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinancingSimulation we want to update
     *   }
     * })
     */
    upsert<T extends FinancingSimulationUpsertArgs>(args: SelectSubset<T, FinancingSimulationUpsertArgs<ExtArgs>>): Prisma__FinancingSimulationClient<$Result.GetResult<Prisma.$FinancingSimulationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FinancingSimulations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancingSimulationCountArgs} args - Arguments to filter FinancingSimulations to count.
     * @example
     * // Count the number of FinancingSimulations
     * const count = await prisma.financingSimulation.count({
     *   where: {
     *     // ... the filter for the FinancingSimulations we want to count
     *   }
     * })
    **/
    count<T extends FinancingSimulationCountArgs>(
      args?: Subset<T, FinancingSimulationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinancingSimulationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinancingSimulation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancingSimulationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FinancingSimulationAggregateArgs>(args: Subset<T, FinancingSimulationAggregateArgs>): Prisma.PrismaPromise<GetFinancingSimulationAggregateType<T>>

    /**
     * Group by FinancingSimulation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancingSimulationGroupByArgs} args - Group by arguments.
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
      T extends FinancingSimulationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinancingSimulationGroupByArgs['orderBy'] }
        : { orderBy?: FinancingSimulationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FinancingSimulationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinancingSimulationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinancingSimulation model
   */
  readonly fields: FinancingSimulationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinancingSimulation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinancingSimulationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FinancingSimulation model
   */
  interface FinancingSimulationFieldRefs {
    readonly id: FieldRef<"FinancingSimulation", 'String'>
    readonly total_amount_cents: FieldRef<"FinancingSimulation", 'Int'>
    readonly installments: FieldRef<"FinancingSimulation", 'Int'>
    readonly monthly_interest_rate: FieldRef<"FinancingSimulation", 'Decimal'>
    readonly monthly_payment_cents: FieldRef<"FinancingSimulation", 'Int'>
    readonly student_id: FieldRef<"FinancingSimulation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FinancingSimulation findUnique
   */
  export type FinancingSimulationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancingSimulation
     */
    select?: FinancingSimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancingSimulation
     */
    omit?: FinancingSimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancingSimulationInclude<ExtArgs> | null
    /**
     * Filter, which FinancingSimulation to fetch.
     */
    where: FinancingSimulationWhereUniqueInput
  }

  /**
   * FinancingSimulation findUniqueOrThrow
   */
  export type FinancingSimulationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancingSimulation
     */
    select?: FinancingSimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancingSimulation
     */
    omit?: FinancingSimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancingSimulationInclude<ExtArgs> | null
    /**
     * Filter, which FinancingSimulation to fetch.
     */
    where: FinancingSimulationWhereUniqueInput
  }

  /**
   * FinancingSimulation findFirst
   */
  export type FinancingSimulationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancingSimulation
     */
    select?: FinancingSimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancingSimulation
     */
    omit?: FinancingSimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancingSimulationInclude<ExtArgs> | null
    /**
     * Filter, which FinancingSimulation to fetch.
     */
    where?: FinancingSimulationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancingSimulations to fetch.
     */
    orderBy?: FinancingSimulationOrderByWithRelationInput | FinancingSimulationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancingSimulations.
     */
    cursor?: FinancingSimulationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancingSimulations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancingSimulations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancingSimulations.
     */
    distinct?: FinancingSimulationScalarFieldEnum | FinancingSimulationScalarFieldEnum[]
  }

  /**
   * FinancingSimulation findFirstOrThrow
   */
  export type FinancingSimulationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancingSimulation
     */
    select?: FinancingSimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancingSimulation
     */
    omit?: FinancingSimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancingSimulationInclude<ExtArgs> | null
    /**
     * Filter, which FinancingSimulation to fetch.
     */
    where?: FinancingSimulationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancingSimulations to fetch.
     */
    orderBy?: FinancingSimulationOrderByWithRelationInput | FinancingSimulationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancingSimulations.
     */
    cursor?: FinancingSimulationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancingSimulations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancingSimulations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancingSimulations.
     */
    distinct?: FinancingSimulationScalarFieldEnum | FinancingSimulationScalarFieldEnum[]
  }

  /**
   * FinancingSimulation findMany
   */
  export type FinancingSimulationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancingSimulation
     */
    select?: FinancingSimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancingSimulation
     */
    omit?: FinancingSimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancingSimulationInclude<ExtArgs> | null
    /**
     * Filter, which FinancingSimulations to fetch.
     */
    where?: FinancingSimulationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancingSimulations to fetch.
     */
    orderBy?: FinancingSimulationOrderByWithRelationInput | FinancingSimulationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinancingSimulations.
     */
    cursor?: FinancingSimulationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancingSimulations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancingSimulations.
     */
    skip?: number
    distinct?: FinancingSimulationScalarFieldEnum | FinancingSimulationScalarFieldEnum[]
  }

  /**
   * FinancingSimulation create
   */
  export type FinancingSimulationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancingSimulation
     */
    select?: FinancingSimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancingSimulation
     */
    omit?: FinancingSimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancingSimulationInclude<ExtArgs> | null
    /**
     * The data needed to create a FinancingSimulation.
     */
    data: XOR<FinancingSimulationCreateInput, FinancingSimulationUncheckedCreateInput>
  }

  /**
   * FinancingSimulation createMany
   */
  export type FinancingSimulationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinancingSimulations.
     */
    data: FinancingSimulationCreateManyInput | FinancingSimulationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinancingSimulation createManyAndReturn
   */
  export type FinancingSimulationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancingSimulation
     */
    select?: FinancingSimulationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancingSimulation
     */
    omit?: FinancingSimulationOmit<ExtArgs> | null
    /**
     * The data used to create many FinancingSimulations.
     */
    data: FinancingSimulationCreateManyInput | FinancingSimulationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancingSimulationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinancingSimulation update
   */
  export type FinancingSimulationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancingSimulation
     */
    select?: FinancingSimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancingSimulation
     */
    omit?: FinancingSimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancingSimulationInclude<ExtArgs> | null
    /**
     * The data needed to update a FinancingSimulation.
     */
    data: XOR<FinancingSimulationUpdateInput, FinancingSimulationUncheckedUpdateInput>
    /**
     * Choose, which FinancingSimulation to update.
     */
    where: FinancingSimulationWhereUniqueInput
  }

  /**
   * FinancingSimulation updateMany
   */
  export type FinancingSimulationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinancingSimulations.
     */
    data: XOR<FinancingSimulationUpdateManyMutationInput, FinancingSimulationUncheckedUpdateManyInput>
    /**
     * Filter which FinancingSimulations to update
     */
    where?: FinancingSimulationWhereInput
    /**
     * Limit how many FinancingSimulations to update.
     */
    limit?: number
  }

  /**
   * FinancingSimulation updateManyAndReturn
   */
  export type FinancingSimulationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancingSimulation
     */
    select?: FinancingSimulationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancingSimulation
     */
    omit?: FinancingSimulationOmit<ExtArgs> | null
    /**
     * The data used to update FinancingSimulations.
     */
    data: XOR<FinancingSimulationUpdateManyMutationInput, FinancingSimulationUncheckedUpdateManyInput>
    /**
     * Filter which FinancingSimulations to update
     */
    where?: FinancingSimulationWhereInput
    /**
     * Limit how many FinancingSimulations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancingSimulationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinancingSimulation upsert
   */
  export type FinancingSimulationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancingSimulation
     */
    select?: FinancingSimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancingSimulation
     */
    omit?: FinancingSimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancingSimulationInclude<ExtArgs> | null
    /**
     * The filter to search for the FinancingSimulation to update in case it exists.
     */
    where: FinancingSimulationWhereUniqueInput
    /**
     * In case the FinancingSimulation found by the `where` argument doesn't exist, create a new FinancingSimulation with this data.
     */
    create: XOR<FinancingSimulationCreateInput, FinancingSimulationUncheckedCreateInput>
    /**
     * In case the FinancingSimulation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinancingSimulationUpdateInput, FinancingSimulationUncheckedUpdateInput>
  }

  /**
   * FinancingSimulation delete
   */
  export type FinancingSimulationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancingSimulation
     */
    select?: FinancingSimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancingSimulation
     */
    omit?: FinancingSimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancingSimulationInclude<ExtArgs> | null
    /**
     * Filter which FinancingSimulation to delete.
     */
    where: FinancingSimulationWhereUniqueInput
  }

  /**
   * FinancingSimulation deleteMany
   */
  export type FinancingSimulationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancingSimulations to delete
     */
    where?: FinancingSimulationWhereInput
    /**
     * Limit how many FinancingSimulations to delete.
     */
    limit?: number
  }

  /**
   * FinancingSimulation without action
   */
  export type FinancingSimulationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancingSimulation
     */
    select?: FinancingSimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancingSimulation
     */
    omit?: FinancingSimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancingSimulationInclude<ExtArgs> | null
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


  export const StudentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    surname: 'surname',
    email: 'email',
    password: 'password'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const FinancingSimulationScalarFieldEnum: {
    id: 'id',
    total_amount_cents: 'total_amount_cents',
    installments: 'installments',
    monthly_interest_rate: 'monthly_interest_rate',
    monthly_payment_cents: 'monthly_payment_cents',
    student_id: 'student_id'
  };

  export type FinancingSimulationScalarFieldEnum = (typeof FinancingSimulationScalarFieldEnum)[keyof typeof FinancingSimulationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    surname?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    FinancingSimulation?: FinancingSimulationListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    FinancingSimulation?: FinancingSimulationOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringFilter<"Student"> | string
    surname?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    FinancingSimulation?: FinancingSimulationListRelationFilter
  }, "id" | "email">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    name?: StringWithAggregatesFilter<"Student"> | string
    surname?: StringWithAggregatesFilter<"Student"> | string
    email?: StringWithAggregatesFilter<"Student"> | string
    password?: StringWithAggregatesFilter<"Student"> | string
  }

  export type FinancingSimulationWhereInput = {
    AND?: FinancingSimulationWhereInput | FinancingSimulationWhereInput[]
    OR?: FinancingSimulationWhereInput[]
    NOT?: FinancingSimulationWhereInput | FinancingSimulationWhereInput[]
    id?: StringFilter<"FinancingSimulation"> | string
    total_amount_cents?: IntFilter<"FinancingSimulation"> | number
    installments?: IntFilter<"FinancingSimulation"> | number
    monthly_interest_rate?: DecimalFilter<"FinancingSimulation"> | Decimal | DecimalJsLike | number | string
    monthly_payment_cents?: IntFilter<"FinancingSimulation"> | number
    student_id?: StringFilter<"FinancingSimulation"> | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type FinancingSimulationOrderByWithRelationInput = {
    id?: SortOrder
    total_amount_cents?: SortOrder
    installments?: SortOrder
    monthly_interest_rate?: SortOrder
    monthly_payment_cents?: SortOrder
    student_id?: SortOrder
    student?: StudentOrderByWithRelationInput
  }

  export type FinancingSimulationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FinancingSimulationWhereInput | FinancingSimulationWhereInput[]
    OR?: FinancingSimulationWhereInput[]
    NOT?: FinancingSimulationWhereInput | FinancingSimulationWhereInput[]
    total_amount_cents?: IntFilter<"FinancingSimulation"> | number
    installments?: IntFilter<"FinancingSimulation"> | number
    monthly_interest_rate?: DecimalFilter<"FinancingSimulation"> | Decimal | DecimalJsLike | number | string
    monthly_payment_cents?: IntFilter<"FinancingSimulation"> | number
    student_id?: StringFilter<"FinancingSimulation"> | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type FinancingSimulationOrderByWithAggregationInput = {
    id?: SortOrder
    total_amount_cents?: SortOrder
    installments?: SortOrder
    monthly_interest_rate?: SortOrder
    monthly_payment_cents?: SortOrder
    student_id?: SortOrder
    _count?: FinancingSimulationCountOrderByAggregateInput
    _avg?: FinancingSimulationAvgOrderByAggregateInput
    _max?: FinancingSimulationMaxOrderByAggregateInput
    _min?: FinancingSimulationMinOrderByAggregateInput
    _sum?: FinancingSimulationSumOrderByAggregateInput
  }

  export type FinancingSimulationScalarWhereWithAggregatesInput = {
    AND?: FinancingSimulationScalarWhereWithAggregatesInput | FinancingSimulationScalarWhereWithAggregatesInput[]
    OR?: FinancingSimulationScalarWhereWithAggregatesInput[]
    NOT?: FinancingSimulationScalarWhereWithAggregatesInput | FinancingSimulationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FinancingSimulation"> | string
    total_amount_cents?: IntWithAggregatesFilter<"FinancingSimulation"> | number
    installments?: IntWithAggregatesFilter<"FinancingSimulation"> | number
    monthly_interest_rate?: DecimalWithAggregatesFilter<"FinancingSimulation"> | Decimal | DecimalJsLike | number | string
    monthly_payment_cents?: IntWithAggregatesFilter<"FinancingSimulation"> | number
    student_id?: StringWithAggregatesFilter<"FinancingSimulation"> | string
  }

  export type StudentCreateInput = {
    id?: string
    name: string
    surname: string
    email: string
    password: string
    FinancingSimulation?: FinancingSimulationCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    name: string
    surname: string
    email: string
    password: string
    FinancingSimulation?: FinancingSimulationUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    FinancingSimulation?: FinancingSimulationUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    FinancingSimulation?: FinancingSimulationUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    name: string
    surname: string
    email: string
    password: string
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type FinancingSimulationCreateInput = {
    id?: string
    total_amount_cents: number
    installments: number
    monthly_interest_rate: Decimal | DecimalJsLike | number | string
    monthly_payment_cents: number
    student: StudentCreateNestedOneWithoutFinancingSimulationInput
  }

  export type FinancingSimulationUncheckedCreateInput = {
    id?: string
    total_amount_cents: number
    installments: number
    monthly_interest_rate: Decimal | DecimalJsLike | number | string
    monthly_payment_cents: number
    student_id: string
  }

  export type FinancingSimulationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_amount_cents?: IntFieldUpdateOperationsInput | number
    installments?: IntFieldUpdateOperationsInput | number
    monthly_interest_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthly_payment_cents?: IntFieldUpdateOperationsInput | number
    student?: StudentUpdateOneRequiredWithoutFinancingSimulationNestedInput
  }

  export type FinancingSimulationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_amount_cents?: IntFieldUpdateOperationsInput | number
    installments?: IntFieldUpdateOperationsInput | number
    monthly_interest_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthly_payment_cents?: IntFieldUpdateOperationsInput | number
    student_id?: StringFieldUpdateOperationsInput | string
  }

  export type FinancingSimulationCreateManyInput = {
    id?: string
    total_amount_cents: number
    installments: number
    monthly_interest_rate: Decimal | DecimalJsLike | number | string
    monthly_payment_cents: number
    student_id: string
  }

  export type FinancingSimulationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_amount_cents?: IntFieldUpdateOperationsInput | number
    installments?: IntFieldUpdateOperationsInput | number
    monthly_interest_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthly_payment_cents?: IntFieldUpdateOperationsInput | number
  }

  export type FinancingSimulationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_amount_cents?: IntFieldUpdateOperationsInput | number
    installments?: IntFieldUpdateOperationsInput | number
    monthly_interest_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthly_payment_cents?: IntFieldUpdateOperationsInput | number
    student_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FinancingSimulationListRelationFilter = {
    every?: FinancingSimulationWhereInput
    some?: FinancingSimulationWhereInput
    none?: FinancingSimulationWhereInput
  }

  export type FinancingSimulationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type FinancingSimulationCountOrderByAggregateInput = {
    id?: SortOrder
    total_amount_cents?: SortOrder
    installments?: SortOrder
    monthly_interest_rate?: SortOrder
    monthly_payment_cents?: SortOrder
    student_id?: SortOrder
  }

  export type FinancingSimulationAvgOrderByAggregateInput = {
    total_amount_cents?: SortOrder
    installments?: SortOrder
    monthly_interest_rate?: SortOrder
    monthly_payment_cents?: SortOrder
  }

  export type FinancingSimulationMaxOrderByAggregateInput = {
    id?: SortOrder
    total_amount_cents?: SortOrder
    installments?: SortOrder
    monthly_interest_rate?: SortOrder
    monthly_payment_cents?: SortOrder
    student_id?: SortOrder
  }

  export type FinancingSimulationMinOrderByAggregateInput = {
    id?: SortOrder
    total_amount_cents?: SortOrder
    installments?: SortOrder
    monthly_interest_rate?: SortOrder
    monthly_payment_cents?: SortOrder
    student_id?: SortOrder
  }

  export type FinancingSimulationSumOrderByAggregateInput = {
    total_amount_cents?: SortOrder
    installments?: SortOrder
    monthly_interest_rate?: SortOrder
    monthly_payment_cents?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type FinancingSimulationCreateNestedManyWithoutStudentInput = {
    create?: XOR<FinancingSimulationCreateWithoutStudentInput, FinancingSimulationUncheckedCreateWithoutStudentInput> | FinancingSimulationCreateWithoutStudentInput[] | FinancingSimulationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FinancingSimulationCreateOrConnectWithoutStudentInput | FinancingSimulationCreateOrConnectWithoutStudentInput[]
    createMany?: FinancingSimulationCreateManyStudentInputEnvelope
    connect?: FinancingSimulationWhereUniqueInput | FinancingSimulationWhereUniqueInput[]
  }

  export type FinancingSimulationUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<FinancingSimulationCreateWithoutStudentInput, FinancingSimulationUncheckedCreateWithoutStudentInput> | FinancingSimulationCreateWithoutStudentInput[] | FinancingSimulationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FinancingSimulationCreateOrConnectWithoutStudentInput | FinancingSimulationCreateOrConnectWithoutStudentInput[]
    createMany?: FinancingSimulationCreateManyStudentInputEnvelope
    connect?: FinancingSimulationWhereUniqueInput | FinancingSimulationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FinancingSimulationUpdateManyWithoutStudentNestedInput = {
    create?: XOR<FinancingSimulationCreateWithoutStudentInput, FinancingSimulationUncheckedCreateWithoutStudentInput> | FinancingSimulationCreateWithoutStudentInput[] | FinancingSimulationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FinancingSimulationCreateOrConnectWithoutStudentInput | FinancingSimulationCreateOrConnectWithoutStudentInput[]
    upsert?: FinancingSimulationUpsertWithWhereUniqueWithoutStudentInput | FinancingSimulationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: FinancingSimulationCreateManyStudentInputEnvelope
    set?: FinancingSimulationWhereUniqueInput | FinancingSimulationWhereUniqueInput[]
    disconnect?: FinancingSimulationWhereUniqueInput | FinancingSimulationWhereUniqueInput[]
    delete?: FinancingSimulationWhereUniqueInput | FinancingSimulationWhereUniqueInput[]
    connect?: FinancingSimulationWhereUniqueInput | FinancingSimulationWhereUniqueInput[]
    update?: FinancingSimulationUpdateWithWhereUniqueWithoutStudentInput | FinancingSimulationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: FinancingSimulationUpdateManyWithWhereWithoutStudentInput | FinancingSimulationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: FinancingSimulationScalarWhereInput | FinancingSimulationScalarWhereInput[]
  }

  export type FinancingSimulationUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<FinancingSimulationCreateWithoutStudentInput, FinancingSimulationUncheckedCreateWithoutStudentInput> | FinancingSimulationCreateWithoutStudentInput[] | FinancingSimulationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FinancingSimulationCreateOrConnectWithoutStudentInput | FinancingSimulationCreateOrConnectWithoutStudentInput[]
    upsert?: FinancingSimulationUpsertWithWhereUniqueWithoutStudentInput | FinancingSimulationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: FinancingSimulationCreateManyStudentInputEnvelope
    set?: FinancingSimulationWhereUniqueInput | FinancingSimulationWhereUniqueInput[]
    disconnect?: FinancingSimulationWhereUniqueInput | FinancingSimulationWhereUniqueInput[]
    delete?: FinancingSimulationWhereUniqueInput | FinancingSimulationWhereUniqueInput[]
    connect?: FinancingSimulationWhereUniqueInput | FinancingSimulationWhereUniqueInput[]
    update?: FinancingSimulationUpdateWithWhereUniqueWithoutStudentInput | FinancingSimulationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: FinancingSimulationUpdateManyWithWhereWithoutStudentInput | FinancingSimulationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: FinancingSimulationScalarWhereInput | FinancingSimulationScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutFinancingSimulationInput = {
    create?: XOR<StudentCreateWithoutFinancingSimulationInput, StudentUncheckedCreateWithoutFinancingSimulationInput>
    connectOrCreate?: StudentCreateOrConnectWithoutFinancingSimulationInput
    connect?: StudentWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type StudentUpdateOneRequiredWithoutFinancingSimulationNestedInput = {
    create?: XOR<StudentCreateWithoutFinancingSimulationInput, StudentUncheckedCreateWithoutFinancingSimulationInput>
    connectOrCreate?: StudentCreateOrConnectWithoutFinancingSimulationInput
    upsert?: StudentUpsertWithoutFinancingSimulationInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutFinancingSimulationInput, StudentUpdateWithoutFinancingSimulationInput>, StudentUncheckedUpdateWithoutFinancingSimulationInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type FinancingSimulationCreateWithoutStudentInput = {
    id?: string
    total_amount_cents: number
    installments: number
    monthly_interest_rate: Decimal | DecimalJsLike | number | string
    monthly_payment_cents: number
  }

  export type FinancingSimulationUncheckedCreateWithoutStudentInput = {
    id?: string
    total_amount_cents: number
    installments: number
    monthly_interest_rate: Decimal | DecimalJsLike | number | string
    monthly_payment_cents: number
  }

  export type FinancingSimulationCreateOrConnectWithoutStudentInput = {
    where: FinancingSimulationWhereUniqueInput
    create: XOR<FinancingSimulationCreateWithoutStudentInput, FinancingSimulationUncheckedCreateWithoutStudentInput>
  }

  export type FinancingSimulationCreateManyStudentInputEnvelope = {
    data: FinancingSimulationCreateManyStudentInput | FinancingSimulationCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type FinancingSimulationUpsertWithWhereUniqueWithoutStudentInput = {
    where: FinancingSimulationWhereUniqueInput
    update: XOR<FinancingSimulationUpdateWithoutStudentInput, FinancingSimulationUncheckedUpdateWithoutStudentInput>
    create: XOR<FinancingSimulationCreateWithoutStudentInput, FinancingSimulationUncheckedCreateWithoutStudentInput>
  }

  export type FinancingSimulationUpdateWithWhereUniqueWithoutStudentInput = {
    where: FinancingSimulationWhereUniqueInput
    data: XOR<FinancingSimulationUpdateWithoutStudentInput, FinancingSimulationUncheckedUpdateWithoutStudentInput>
  }

  export type FinancingSimulationUpdateManyWithWhereWithoutStudentInput = {
    where: FinancingSimulationScalarWhereInput
    data: XOR<FinancingSimulationUpdateManyMutationInput, FinancingSimulationUncheckedUpdateManyWithoutStudentInput>
  }

  export type FinancingSimulationScalarWhereInput = {
    AND?: FinancingSimulationScalarWhereInput | FinancingSimulationScalarWhereInput[]
    OR?: FinancingSimulationScalarWhereInput[]
    NOT?: FinancingSimulationScalarWhereInput | FinancingSimulationScalarWhereInput[]
    id?: StringFilter<"FinancingSimulation"> | string
    total_amount_cents?: IntFilter<"FinancingSimulation"> | number
    installments?: IntFilter<"FinancingSimulation"> | number
    monthly_interest_rate?: DecimalFilter<"FinancingSimulation"> | Decimal | DecimalJsLike | number | string
    monthly_payment_cents?: IntFilter<"FinancingSimulation"> | number
    student_id?: StringFilter<"FinancingSimulation"> | string
  }

  export type StudentCreateWithoutFinancingSimulationInput = {
    id?: string
    name: string
    surname: string
    email: string
    password: string
  }

  export type StudentUncheckedCreateWithoutFinancingSimulationInput = {
    id?: string
    name: string
    surname: string
    email: string
    password: string
  }

  export type StudentCreateOrConnectWithoutFinancingSimulationInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutFinancingSimulationInput, StudentUncheckedCreateWithoutFinancingSimulationInput>
  }

  export type StudentUpsertWithoutFinancingSimulationInput = {
    update: XOR<StudentUpdateWithoutFinancingSimulationInput, StudentUncheckedUpdateWithoutFinancingSimulationInput>
    create: XOR<StudentCreateWithoutFinancingSimulationInput, StudentUncheckedCreateWithoutFinancingSimulationInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutFinancingSimulationInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutFinancingSimulationInput, StudentUncheckedUpdateWithoutFinancingSimulationInput>
  }

  export type StudentUpdateWithoutFinancingSimulationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUncheckedUpdateWithoutFinancingSimulationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type FinancingSimulationCreateManyStudentInput = {
    id?: string
    total_amount_cents: number
    installments: number
    monthly_interest_rate: Decimal | DecimalJsLike | number | string
    monthly_payment_cents: number
  }

  export type FinancingSimulationUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_amount_cents?: IntFieldUpdateOperationsInput | number
    installments?: IntFieldUpdateOperationsInput | number
    monthly_interest_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthly_payment_cents?: IntFieldUpdateOperationsInput | number
  }

  export type FinancingSimulationUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_amount_cents?: IntFieldUpdateOperationsInput | number
    installments?: IntFieldUpdateOperationsInput | number
    monthly_interest_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthly_payment_cents?: IntFieldUpdateOperationsInput | number
  }

  export type FinancingSimulationUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_amount_cents?: IntFieldUpdateOperationsInput | number
    installments?: IntFieldUpdateOperationsInput | number
    monthly_interest_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthly_payment_cents?: IntFieldUpdateOperationsInput | number
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