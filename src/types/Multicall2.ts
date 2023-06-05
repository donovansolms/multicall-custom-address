/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export declare namespace Multicall2 {
  export type CallStruct = { target: string; callData: BytesLike };

  export type CallStructOutput = [string, string] & {
    target: string;
    callData: string;
  };

  export type ResultStruct = { success: boolean; returnData: BytesLike };

  export type ResultStructOutput = [boolean, string] & {
    success: boolean;
    returnData: string;
  };
}

export interface Multicall2Interface extends utils.Interface {
  functions: {
    "aggregate((address,bytes)[])": FunctionFragment;
    "blockAndAggregate((address,bytes)[])": FunctionFragment;
    "getBlockHash(uint256)": FunctionFragment;
    "getBlockNumber()": FunctionFragment;
    "getCurrentBlockCoinbase()": FunctionFragment;
    "getCurrentBlockDifficulty()": FunctionFragment;
    "getCurrentBlockGasLimit()": FunctionFragment;
    "getCurrentBlockTimestamp()": FunctionFragment;
    "getEthBalance(address)": FunctionFragment;
    "getLastBlockHash()": FunctionFragment;
    "tryAggregate(bool,(address,bytes)[])": FunctionFragment;
    "tryBlockAndAggregate(bool,(address,bytes)[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "aggregate"
      | "blockAndAggregate"
      | "getBlockHash"
      | "getBlockNumber"
      | "getCurrentBlockCoinbase"
      | "getCurrentBlockDifficulty"
      | "getCurrentBlockGasLimit"
      | "getCurrentBlockTimestamp"
      | "getEthBalance"
      | "getLastBlockHash"
      | "tryAggregate"
      | "tryBlockAndAggregate"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "aggregate",
    values: [Multicall2.CallStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "blockAndAggregate",
    values: [Multicall2.CallStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getBlockHash",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBlockNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentBlockCoinbase",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentBlockDifficulty",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentBlockGasLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentBlockTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEthBalance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLastBlockHash",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tryAggregate",
    values: [boolean, Multicall2.CallStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "tryBlockAndAggregate",
    values: [boolean, Multicall2.CallStruct[]]
  ): string;

  decodeFunctionResult(functionFragment: "aggregate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "blockAndAggregate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBlockHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBlockNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentBlockCoinbase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentBlockDifficulty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentBlockGasLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentBlockTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEthBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastBlockHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tryAggregate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tryBlockAndAggregate",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Multicall2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: Multicall2Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    aggregate(
      calls: Multicall2.CallStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    blockAndAggregate(
      calls: Multicall2.CallStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getBlockHash(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { blockHash: string }>;

    getBlockNumber(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { blockNumber: BigNumber }>;

    getCurrentBlockCoinbase(
      overrides?: CallOverrides
    ): Promise<[string] & { coinbase: string }>;

    getCurrentBlockDifficulty(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { difficulty: BigNumber }>;

    getCurrentBlockGasLimit(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { gaslimit: BigNumber }>;

    getCurrentBlockTimestamp(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { timestamp: BigNumber }>;

    getEthBalance(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    getLastBlockHash(
      overrides?: CallOverrides
    ): Promise<[string] & { blockHash: string }>;

    tryAggregate(
      requireSuccess: boolean,
      calls: Multicall2.CallStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    tryBlockAndAggregate(
      requireSuccess: boolean,
      calls: Multicall2.CallStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  aggregate(
    calls: Multicall2.CallStruct[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  blockAndAggregate(
    calls: Multicall2.CallStruct[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getBlockHash(
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

  getCurrentBlockCoinbase(overrides?: CallOverrides): Promise<string>;

  getCurrentBlockDifficulty(overrides?: CallOverrides): Promise<BigNumber>;

  getCurrentBlockGasLimit(overrides?: CallOverrides): Promise<BigNumber>;

  getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  getEthBalance(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

  getLastBlockHash(overrides?: CallOverrides): Promise<string>;

  tryAggregate(
    requireSuccess: boolean,
    calls: Multicall2.CallStruct[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  tryBlockAndAggregate(
    requireSuccess: boolean,
    calls: Multicall2.CallStruct[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    aggregate(
      calls: Multicall2.CallStruct[],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string[]] & { blockNumber: BigNumber; returnData: string[] }
    >;

    blockAndAggregate(
      calls: Multicall2.CallStruct[],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, Multicall2.ResultStructOutput[]] & {
        blockNumber: BigNumber;
        blockHash: string;
        returnData: Multicall2.ResultStructOutput[];
      }
    >;

    getBlockHash(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentBlockCoinbase(overrides?: CallOverrides): Promise<string>;

    getCurrentBlockDifficulty(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentBlockGasLimit(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    getEthBalance(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    getLastBlockHash(overrides?: CallOverrides): Promise<string>;

    tryAggregate(
      requireSuccess: boolean,
      calls: Multicall2.CallStruct[],
      overrides?: CallOverrides
    ): Promise<Multicall2.ResultStructOutput[]>;

    tryBlockAndAggregate(
      requireSuccess: boolean,
      calls: Multicall2.CallStruct[],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, Multicall2.ResultStructOutput[]] & {
        blockNumber: BigNumber;
        blockHash: string;
        returnData: Multicall2.ResultStructOutput[];
      }
    >;
  };

  filters: {};

  estimateGas: {
    aggregate(
      calls: Multicall2.CallStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    blockAndAggregate(
      calls: Multicall2.CallStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getBlockHash(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentBlockCoinbase(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentBlockDifficulty(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentBlockGasLimit(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    getEthBalance(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    getLastBlockHash(overrides?: CallOverrides): Promise<BigNumber>;

    tryAggregate(
      requireSuccess: boolean,
      calls: Multicall2.CallStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    tryBlockAndAggregate(
      requireSuccess: boolean,
      calls: Multicall2.CallStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    aggregate(
      calls: Multicall2.CallStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    blockAndAggregate(
      calls: Multicall2.CallStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getBlockHash(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBlockNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCurrentBlockCoinbase(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrentBlockDifficulty(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrentBlockGasLimit(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrentBlockTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEthBalance(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLastBlockHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tryAggregate(
      requireSuccess: boolean,
      calls: Multicall2.CallStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    tryBlockAndAggregate(
      requireSuccess: boolean,
      calls: Multicall2.CallStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
