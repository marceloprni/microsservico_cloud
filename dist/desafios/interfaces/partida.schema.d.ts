import * as mongoose from 'mongoose';
export declare const PartidaSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    jogadores: mongoose.Types.ObjectId[];
    resultado: mongoose.Types.DocumentArray<{
        set?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        set?: string | null | undefined;
    }> & {
        set?: string | null | undefined;
    }>;
    categoria?: string | null | undefined;
    def?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    jogadores: mongoose.Types.ObjectId[];
    resultado: mongoose.Types.DocumentArray<{
        set?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        set?: string | null | undefined;
    }> & {
        set?: string | null | undefined;
    }>;
    categoria?: string | null | undefined;
    def?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
    collection: string;
}>> & Omit<{
    jogadores: mongoose.Types.ObjectId[];
    resultado: mongoose.Types.DocumentArray<{
        set?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        set?: string | null | undefined;
    }> & {
        set?: string | null | undefined;
    }>;
    categoria?: string | null | undefined;
    def?: mongoose.Types.ObjectId | null | undefined;
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
        resultado: mongoose.Types.DocumentArray<{
            set?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            set?: string | null | undefined;
        }> & {
            set?: string | null | undefined;
        }>;
        categoria?: string | null | undefined;
        def?: mongoose.Types.ObjectId | null | undefined;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.ResolveSchemaOptions<{
        timestamps: true;
        collection: string;
    }>> & Omit<{
        jogadores: mongoose.Types.ObjectId[];
        resultado: mongoose.Types.DocumentArray<{
            set?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            set?: string | null | undefined;
        }> & {
            set?: string | null | undefined;
        }>;
        categoria?: string | null | undefined;
        def?: mongoose.Types.ObjectId | null | undefined;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    jogadores: mongoose.Types.ObjectId[];
    resultado: mongoose.Types.DocumentArray<{
        set?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        set?: string | null | undefined;
    }> & {
        set?: string | null | undefined;
    }>;
    categoria?: string | null | undefined;
    def?: mongoose.Types.ObjectId | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
