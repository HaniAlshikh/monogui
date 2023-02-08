import * as jspb from 'google-protobuf'



export class ServiceInformation extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): ServiceInformation;

  getName(): string;
  setName(value: string): ServiceInformation;

  getCommit(): string;
  setCommit(value: string): ServiceInformation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceInformation.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceInformation): ServiceInformation.AsObject;
  static serializeBinaryToWriter(message: ServiceInformation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceInformation;
  static deserializeBinaryFromReader(message: ServiceInformation, reader: jspb.BinaryReader): ServiceInformation;
}

export namespace ServiceInformation {
  export type AsObject = {
    version: string,
    name: string,
    commit: string,
  }
}

export class CertificateChain extends jspb.Message {
  getCa(): Uint8Array | string;
  getCa_asU8(): Uint8Array;
  getCa_asB64(): string;
  setCa(value: Uint8Array | string): CertificateChain;

  getCertificate(): Uint8Array | string;
  getCertificate_asU8(): Uint8Array;
  getCertificate_asB64(): string;
  setCertificate(value: Uint8Array | string): CertificateChain;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CertificateChain.AsObject;
  static toObject(includeInstance: boolean, msg: CertificateChain): CertificateChain.AsObject;
  static serializeBinaryToWriter(message: CertificateChain, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CertificateChain;
  static deserializeBinaryFromReader(message: CertificateChain, reader: jspb.BinaryReader): CertificateChain;
}

export namespace CertificateChain {
  export type AsObject = {
    ca: Uint8Array | string,
    certificate: Uint8Array | string,
  }
}

export enum UserSource { 
  INTERNAL = 0,
  SCIM = 1,
}
