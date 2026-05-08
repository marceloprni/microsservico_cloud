import mongoose from "mongoose";
export declare const JogadorSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    telefoneCelular?: string | null | undefined;
    email?: string | null | undefined;
    nome?: string | null | undefined;
    ranking?: string | null | undefined;
    posicaoRanking?: number | null | undefined;
    urlFotoJogador?: string | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    telefoneCelular?: string | null | undefined;
    email?: string | null | undefined;
    nome?: string | null | undefined;
    ranking?: string | null | undefined;
    posicaoRanking?: number | null | undefined;
    urlFotoJogador?: string | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
    collection: string;
}>> & Omit<{
    telefoneCelular?: string | null | undefined;
    email?: string | null | undefined;
    nome?: string | null | undefined;
    ranking?: string | null | undefined;
    posicaoRanking?: number | null | undefined;
    urlFotoJogador?: string | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        telefoneCelular?: string | null | undefined;
        email?: string | null | undefined;
        nome?: string | null | undefined;
        ranking?: string | null | undefined;
        posicaoRanking?: number | null | undefined;
        urlFotoJogador?: string | null | undefined;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.ResolveSchemaOptions<{
        timestamps: true;
        collection: string;
    }>> & Omit<{
        telefoneCelular?: string | null | undefined;
        email?: string | null | undefined;
        nome?: string | null | undefined;
        ranking?: string | null | undefined;
        posicaoRanking?: number | null | undefined;
        urlFotoJogador?: string | null | undefined;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    telefoneCelular?: string | null | undefined;
    email?: string | null | undefined;
    nome?: string | null | undefined;
    ranking?: string | null | undefined;
    posicaoRanking?: number | null | undefined;
    urlFotoJogador?: string | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
