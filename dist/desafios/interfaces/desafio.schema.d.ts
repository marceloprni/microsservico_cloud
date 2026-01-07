import * as mongoose from 'mongoose';
export declare const DesafioSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    jogadores: mongoose.Types.ObjectId[];
    dataHoraDesafio?: NativeDate | null | undefined;
    status?: string | null | undefined;
    dataHoraSolicitacao?: NativeDate | null | undefined;
    dataHoraResposta?: NativeDate | null | undefined;
    solicitante?: mongoose.Types.ObjectId | null | undefined;
    categoria?: string | null | undefined;
    partida?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    jogadores: mongoose.Types.ObjectId[];
    dataHoraDesafio?: NativeDate | null | undefined;
    status?: string | null | undefined;
    dataHoraSolicitacao?: NativeDate | null | undefined;
    dataHoraResposta?: NativeDate | null | undefined;
    solicitante?: mongoose.Types.ObjectId | null | undefined;
    categoria?: string | null | undefined;
    partida?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
    collection: string;
}>> & Omit<{
    jogadores: mongoose.Types.ObjectId[];
    dataHoraDesafio?: NativeDate | null | undefined;
    status?: string | null | undefined;
    dataHoraSolicitacao?: NativeDate | null | undefined;
    dataHoraResposta?: NativeDate | null | undefined;
    solicitante?: mongoose.Types.ObjectId | null | undefined;
    categoria?: string | null | undefined;
    partida?: mongoose.Types.ObjectId | null | undefined;
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
        jogadores: mongoose.Types.ObjectId[];
        dataHoraDesafio?: NativeDate | null | undefined;
        status?: string | null | undefined;
        dataHoraSolicitacao?: NativeDate | null | undefined;
        dataHoraResposta?: NativeDate | null | undefined;
        solicitante?: mongoose.Types.ObjectId | null | undefined;
        categoria?: string | null | undefined;
        partida?: mongoose.Types.ObjectId | null | undefined;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.ResolveSchemaOptions<{
        timestamps: true;
        collection: string;
    }>> & Omit<{
        jogadores: mongoose.Types.ObjectId[];
        dataHoraDesafio?: NativeDate | null | undefined;
        status?: string | null | undefined;
        dataHoraSolicitacao?: NativeDate | null | undefined;
        dataHoraResposta?: NativeDate | null | undefined;
        solicitante?: mongoose.Types.ObjectId | null | undefined;
        categoria?: string | null | undefined;
        partida?: mongoose.Types.ObjectId | null | undefined;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    jogadores: mongoose.Types.ObjectId[];
    dataHoraDesafio?: NativeDate | null | undefined;
    status?: string | null | undefined;
    dataHoraSolicitacao?: NativeDate | null | undefined;
    dataHoraResposta?: NativeDate | null | undefined;
    solicitante?: mongoose.Types.ObjectId | null | undefined;
    categoria?: string | null | undefined;
    partida?: mongoose.Types.ObjectId | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
