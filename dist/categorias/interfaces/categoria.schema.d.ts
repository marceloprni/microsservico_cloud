import mongoose from "mongoose";
export declare const CategoriaSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    jogadores: mongoose.Types.ObjectId[];
    eventos: mongoose.Types.DocumentArray<{
        nome?: string | null | undefined;
        operacao?: string | null | undefined;
        valor?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        nome?: string | null | undefined;
        operacao?: string | null | undefined;
        valor?: number | null | undefined;
    }> & {
        nome?: string | null | undefined;
        operacao?: string | null | undefined;
        valor?: number | null | undefined;
    }>;
    categoria?: string | null | undefined;
    descricao?: string | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    jogadores: mongoose.Types.ObjectId[];
    eventos: mongoose.Types.DocumentArray<{
        nome?: string | null | undefined;
        operacao?: string | null | undefined;
        valor?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        nome?: string | null | undefined;
        operacao?: string | null | undefined;
        valor?: number | null | undefined;
    }> & {
        nome?: string | null | undefined;
        operacao?: string | null | undefined;
        valor?: number | null | undefined;
    }>;
    categoria?: string | null | undefined;
    descricao?: string | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
    collection: string;
}>> & Omit<{
    jogadores: mongoose.Types.ObjectId[];
    eventos: mongoose.Types.DocumentArray<{
        nome?: string | null | undefined;
        operacao?: string | null | undefined;
        valor?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        nome?: string | null | undefined;
        operacao?: string | null | undefined;
        valor?: number | null | undefined;
    }> & {
        nome?: string | null | undefined;
        operacao?: string | null | undefined;
        valor?: number | null | undefined;
    }>;
    categoria?: string | null | undefined;
    descricao?: string | null | undefined;
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
        eventos: mongoose.Types.DocumentArray<{
            nome?: string | null | undefined;
            operacao?: string | null | undefined;
            valor?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            nome?: string | null | undefined;
            operacao?: string | null | undefined;
            valor?: number | null | undefined;
        }> & {
            nome?: string | null | undefined;
            operacao?: string | null | undefined;
            valor?: number | null | undefined;
        }>;
        categoria?: string | null | undefined;
        descricao?: string | null | undefined;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.ResolveSchemaOptions<{
        timestamps: true;
        collection: string;
    }>> & Omit<{
        jogadores: mongoose.Types.ObjectId[];
        eventos: mongoose.Types.DocumentArray<{
            nome?: string | null | undefined;
            operacao?: string | null | undefined;
            valor?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            nome?: string | null | undefined;
            operacao?: string | null | undefined;
            valor?: number | null | undefined;
        }> & {
            nome?: string | null | undefined;
            operacao?: string | null | undefined;
            valor?: number | null | undefined;
        }>;
        categoria?: string | null | undefined;
        descricao?: string | null | undefined;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    jogadores: mongoose.Types.ObjectId[];
    eventos: mongoose.Types.DocumentArray<{
        nome?: string | null | undefined;
        operacao?: string | null | undefined;
        valor?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        nome?: string | null | undefined;
        operacao?: string | null | undefined;
        valor?: number | null | undefined;
    }> & {
        nome?: string | null | undefined;
        operacao?: string | null | undefined;
        valor?: number | null | undefined;
    }>;
    categoria?: string | null | undefined;
    descricao?: string | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
