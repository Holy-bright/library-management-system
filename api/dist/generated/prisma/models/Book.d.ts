import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BookModel = runtime.Types.Result.DefaultSelection<Prisma.$BookPayload>;
export type AggregateBook = {
    _count: BookCountAggregateOutputType | null;
    _avg: BookAvgAggregateOutputType | null;
    _sum: BookSumAggregateOutputType | null;
    _min: BookMinAggregateOutputType | null;
    _max: BookMaxAggregateOutputType | null;
};
export type BookAvgAggregateOutputType = {
    id: number | null;
    totalCopies: number | null;
    availableCopies: number | null;
    genreId: number | null;
};
export type BookSumAggregateOutputType = {
    id: number | null;
    totalCopies: number | null;
    availableCopies: number | null;
    genreId: number | null;
};
export type BookMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    author: string | null;
    isbn: string | null;
    totalCopies: number | null;
    availableCopies: number | null;
    genreId: number | null;
};
export type BookMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    author: string | null;
    isbn: string | null;
    totalCopies: number | null;
    availableCopies: number | null;
    genreId: number | null;
};
export type BookCountAggregateOutputType = {
    id: number;
    title: number;
    author: number;
    isbn: number;
    totalCopies: number;
    availableCopies: number;
    genreId: number;
    _all: number;
};
export type BookAvgAggregateInputType = {
    id?: true;
    totalCopies?: true;
    availableCopies?: true;
    genreId?: true;
};
export type BookSumAggregateInputType = {
    id?: true;
    totalCopies?: true;
    availableCopies?: true;
    genreId?: true;
};
export type BookMinAggregateInputType = {
    id?: true;
    title?: true;
    author?: true;
    isbn?: true;
    totalCopies?: true;
    availableCopies?: true;
    genreId?: true;
};
export type BookMaxAggregateInputType = {
    id?: true;
    title?: true;
    author?: true;
    isbn?: true;
    totalCopies?: true;
    availableCopies?: true;
    genreId?: true;
};
export type BookCountAggregateInputType = {
    id?: true;
    title?: true;
    author?: true;
    isbn?: true;
    totalCopies?: true;
    availableCopies?: true;
    genreId?: true;
    _all?: true;
};
export type BookAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithRelationInput | Prisma.BookOrderByWithRelationInput[];
    cursor?: Prisma.BookWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BookCountAggregateInputType;
    _avg?: BookAvgAggregateInputType;
    _sum?: BookSumAggregateInputType;
    _min?: BookMinAggregateInputType;
    _max?: BookMaxAggregateInputType;
};
export type GetBookAggregateType<T extends BookAggregateArgs> = {
    [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBook[P]> : Prisma.GetScalarType<T[P], AggregateBook[P]>;
};
export type BookGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithAggregationInput | Prisma.BookOrderByWithAggregationInput[];
    by: Prisma.BookScalarFieldEnum[] | Prisma.BookScalarFieldEnum;
    having?: Prisma.BookScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookCountAggregateInputType | true;
    _avg?: BookAvgAggregateInputType;
    _sum?: BookSumAggregateInputType;
    _min?: BookMinAggregateInputType;
    _max?: BookMaxAggregateInputType;
};
export type BookGroupByOutputType = {
    id: number;
    title: string;
    author: string;
    isbn: string;
    totalCopies: number;
    availableCopies: number;
    genreId: number;
    _count: BookCountAggregateOutputType | null;
    _avg: BookAvgAggregateOutputType | null;
    _sum: BookSumAggregateOutputType | null;
    _min: BookMinAggregateOutputType | null;
    _max: BookMaxAggregateOutputType | null;
};
export type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BookGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BookGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BookGroupByOutputType[P]>;
}>>;
export type BookWhereInput = {
    AND?: Prisma.BookWhereInput | Prisma.BookWhereInput[];
    OR?: Prisma.BookWhereInput[];
    NOT?: Prisma.BookWhereInput | Prisma.BookWhereInput[];
    id?: Prisma.IntFilter<"Book"> | number;
    title?: Prisma.StringFilter<"Book"> | string;
    author?: Prisma.StringFilter<"Book"> | string;
    isbn?: Prisma.StringFilter<"Book"> | string;
    totalCopies?: Prisma.IntFilter<"Book"> | number;
    availableCopies?: Prisma.IntFilter<"Book"> | number;
    genreId?: Prisma.IntFilter<"Book"> | number;
    genre?: Prisma.XOR<Prisma.GenreScalarRelationFilter, Prisma.GenreWhereInput>;
};
export type BookOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    author?: Prisma.SortOrder;
    isbn?: Prisma.SortOrder;
    totalCopies?: Prisma.SortOrder;
    availableCopies?: Prisma.SortOrder;
    genreId?: Prisma.SortOrder;
    genre?: Prisma.GenreOrderByWithRelationInput;
};
export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    isbn?: string;
    AND?: Prisma.BookWhereInput | Prisma.BookWhereInput[];
    OR?: Prisma.BookWhereInput[];
    NOT?: Prisma.BookWhereInput | Prisma.BookWhereInput[];
    title?: Prisma.StringFilter<"Book"> | string;
    author?: Prisma.StringFilter<"Book"> | string;
    totalCopies?: Prisma.IntFilter<"Book"> | number;
    availableCopies?: Prisma.IntFilter<"Book"> | number;
    genreId?: Prisma.IntFilter<"Book"> | number;
    genre?: Prisma.XOR<Prisma.GenreScalarRelationFilter, Prisma.GenreWhereInput>;
}, "id" | "isbn">;
export type BookOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    author?: Prisma.SortOrder;
    isbn?: Prisma.SortOrder;
    totalCopies?: Prisma.SortOrder;
    availableCopies?: Prisma.SortOrder;
    genreId?: Prisma.SortOrder;
    _count?: Prisma.BookCountOrderByAggregateInput;
    _avg?: Prisma.BookAvgOrderByAggregateInput;
    _max?: Prisma.BookMaxOrderByAggregateInput;
    _min?: Prisma.BookMinOrderByAggregateInput;
    _sum?: Prisma.BookSumOrderByAggregateInput;
};
export type BookScalarWhereWithAggregatesInput = {
    AND?: Prisma.BookScalarWhereWithAggregatesInput | Prisma.BookScalarWhereWithAggregatesInput[];
    OR?: Prisma.BookScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BookScalarWhereWithAggregatesInput | Prisma.BookScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Book"> | number;
    title?: Prisma.StringWithAggregatesFilter<"Book"> | string;
    author?: Prisma.StringWithAggregatesFilter<"Book"> | string;
    isbn?: Prisma.StringWithAggregatesFilter<"Book"> | string;
    totalCopies?: Prisma.IntWithAggregatesFilter<"Book"> | number;
    availableCopies?: Prisma.IntWithAggregatesFilter<"Book"> | number;
    genreId?: Prisma.IntWithAggregatesFilter<"Book"> | number;
};
export type BookCreateInput = {
    title: string;
    author: string;
    isbn: string;
    totalCopies?: number;
    availableCopies?: number;
    genre: Prisma.GenreCreateNestedOneWithoutBooksInput;
};
export type BookUncheckedCreateInput = {
    id?: number;
    title: string;
    author: string;
    isbn: string;
    totalCopies?: number;
    availableCopies?: number;
    genreId: number;
};
export type BookUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    isbn?: Prisma.StringFieldUpdateOperationsInput | string;
    totalCopies?: Prisma.IntFieldUpdateOperationsInput | number;
    availableCopies?: Prisma.IntFieldUpdateOperationsInput | number;
    genre?: Prisma.GenreUpdateOneRequiredWithoutBooksNestedInput;
};
export type BookUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    isbn?: Prisma.StringFieldUpdateOperationsInput | string;
    totalCopies?: Prisma.IntFieldUpdateOperationsInput | number;
    availableCopies?: Prisma.IntFieldUpdateOperationsInput | number;
    genreId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BookCreateManyInput = {
    id?: number;
    title: string;
    author: string;
    isbn: string;
    totalCopies?: number;
    availableCopies?: number;
    genreId: number;
};
export type BookUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    isbn?: Prisma.StringFieldUpdateOperationsInput | string;
    totalCopies?: Prisma.IntFieldUpdateOperationsInput | number;
    availableCopies?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BookUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    isbn?: Prisma.StringFieldUpdateOperationsInput | string;
    totalCopies?: Prisma.IntFieldUpdateOperationsInput | number;
    availableCopies?: Prisma.IntFieldUpdateOperationsInput | number;
    genreId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BookListRelationFilter = {
    every?: Prisma.BookWhereInput;
    some?: Prisma.BookWhereInput;
    none?: Prisma.BookWhereInput;
};
export type BookOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BookCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    author?: Prisma.SortOrder;
    isbn?: Prisma.SortOrder;
    totalCopies?: Prisma.SortOrder;
    availableCopies?: Prisma.SortOrder;
    genreId?: Prisma.SortOrder;
};
export type BookAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    totalCopies?: Prisma.SortOrder;
    availableCopies?: Prisma.SortOrder;
    genreId?: Prisma.SortOrder;
};
export type BookMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    author?: Prisma.SortOrder;
    isbn?: Prisma.SortOrder;
    totalCopies?: Prisma.SortOrder;
    availableCopies?: Prisma.SortOrder;
    genreId?: Prisma.SortOrder;
};
export type BookMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    author?: Prisma.SortOrder;
    isbn?: Prisma.SortOrder;
    totalCopies?: Prisma.SortOrder;
    availableCopies?: Prisma.SortOrder;
    genreId?: Prisma.SortOrder;
};
export type BookSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    totalCopies?: Prisma.SortOrder;
    availableCopies?: Prisma.SortOrder;
    genreId?: Prisma.SortOrder;
};
export type BookCreateNestedManyWithoutGenreInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutGenreInput, Prisma.BookUncheckedCreateWithoutGenreInput> | Prisma.BookCreateWithoutGenreInput[] | Prisma.BookUncheckedCreateWithoutGenreInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutGenreInput | Prisma.BookCreateOrConnectWithoutGenreInput[];
    createMany?: Prisma.BookCreateManyGenreInputEnvelope;
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
};
export type BookUncheckedCreateNestedManyWithoutGenreInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutGenreInput, Prisma.BookUncheckedCreateWithoutGenreInput> | Prisma.BookCreateWithoutGenreInput[] | Prisma.BookUncheckedCreateWithoutGenreInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutGenreInput | Prisma.BookCreateOrConnectWithoutGenreInput[];
    createMany?: Prisma.BookCreateManyGenreInputEnvelope;
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
};
export type BookUpdateManyWithoutGenreNestedInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutGenreInput, Prisma.BookUncheckedCreateWithoutGenreInput> | Prisma.BookCreateWithoutGenreInput[] | Prisma.BookUncheckedCreateWithoutGenreInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutGenreInput | Prisma.BookCreateOrConnectWithoutGenreInput[];
    upsert?: Prisma.BookUpsertWithWhereUniqueWithoutGenreInput | Prisma.BookUpsertWithWhereUniqueWithoutGenreInput[];
    createMany?: Prisma.BookCreateManyGenreInputEnvelope;
    set?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    disconnect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    delete?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    update?: Prisma.BookUpdateWithWhereUniqueWithoutGenreInput | Prisma.BookUpdateWithWhereUniqueWithoutGenreInput[];
    updateMany?: Prisma.BookUpdateManyWithWhereWithoutGenreInput | Prisma.BookUpdateManyWithWhereWithoutGenreInput[];
    deleteMany?: Prisma.BookScalarWhereInput | Prisma.BookScalarWhereInput[];
};
export type BookUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutGenreInput, Prisma.BookUncheckedCreateWithoutGenreInput> | Prisma.BookCreateWithoutGenreInput[] | Prisma.BookUncheckedCreateWithoutGenreInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutGenreInput | Prisma.BookCreateOrConnectWithoutGenreInput[];
    upsert?: Prisma.BookUpsertWithWhereUniqueWithoutGenreInput | Prisma.BookUpsertWithWhereUniqueWithoutGenreInput[];
    createMany?: Prisma.BookCreateManyGenreInputEnvelope;
    set?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    disconnect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    delete?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    update?: Prisma.BookUpdateWithWhereUniqueWithoutGenreInput | Prisma.BookUpdateWithWhereUniqueWithoutGenreInput[];
    updateMany?: Prisma.BookUpdateManyWithWhereWithoutGenreInput | Prisma.BookUpdateManyWithWhereWithoutGenreInput[];
    deleteMany?: Prisma.BookScalarWhereInput | Prisma.BookScalarWhereInput[];
};
export type BookCreateWithoutGenreInput = {
    title: string;
    author: string;
    isbn: string;
    totalCopies?: number;
    availableCopies?: number;
};
export type BookUncheckedCreateWithoutGenreInput = {
    id?: number;
    title: string;
    author: string;
    isbn: string;
    totalCopies?: number;
    availableCopies?: number;
};
export type BookCreateOrConnectWithoutGenreInput = {
    where: Prisma.BookWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookCreateWithoutGenreInput, Prisma.BookUncheckedCreateWithoutGenreInput>;
};
export type BookCreateManyGenreInputEnvelope = {
    data: Prisma.BookCreateManyGenreInput | Prisma.BookCreateManyGenreInput[];
    skipDuplicates?: boolean;
};
export type BookUpsertWithWhereUniqueWithoutGenreInput = {
    where: Prisma.BookWhereUniqueInput;
    update: Prisma.XOR<Prisma.BookUpdateWithoutGenreInput, Prisma.BookUncheckedUpdateWithoutGenreInput>;
    create: Prisma.XOR<Prisma.BookCreateWithoutGenreInput, Prisma.BookUncheckedCreateWithoutGenreInput>;
};
export type BookUpdateWithWhereUniqueWithoutGenreInput = {
    where: Prisma.BookWhereUniqueInput;
    data: Prisma.XOR<Prisma.BookUpdateWithoutGenreInput, Prisma.BookUncheckedUpdateWithoutGenreInput>;
};
export type BookUpdateManyWithWhereWithoutGenreInput = {
    where: Prisma.BookScalarWhereInput;
    data: Prisma.XOR<Prisma.BookUpdateManyMutationInput, Prisma.BookUncheckedUpdateManyWithoutGenreInput>;
};
export type BookScalarWhereInput = {
    AND?: Prisma.BookScalarWhereInput | Prisma.BookScalarWhereInput[];
    OR?: Prisma.BookScalarWhereInput[];
    NOT?: Prisma.BookScalarWhereInput | Prisma.BookScalarWhereInput[];
    id?: Prisma.IntFilter<"Book"> | number;
    title?: Prisma.StringFilter<"Book"> | string;
    author?: Prisma.StringFilter<"Book"> | string;
    isbn?: Prisma.StringFilter<"Book"> | string;
    totalCopies?: Prisma.IntFilter<"Book"> | number;
    availableCopies?: Prisma.IntFilter<"Book"> | number;
    genreId?: Prisma.IntFilter<"Book"> | number;
};
export type BookCreateManyGenreInput = {
    id?: number;
    title: string;
    author: string;
    isbn: string;
    totalCopies?: number;
    availableCopies?: number;
};
export type BookUpdateWithoutGenreInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    isbn?: Prisma.StringFieldUpdateOperationsInput | string;
    totalCopies?: Prisma.IntFieldUpdateOperationsInput | number;
    availableCopies?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BookUncheckedUpdateWithoutGenreInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    isbn?: Prisma.StringFieldUpdateOperationsInput | string;
    totalCopies?: Prisma.IntFieldUpdateOperationsInput | number;
    availableCopies?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BookUncheckedUpdateManyWithoutGenreInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    isbn?: Prisma.StringFieldUpdateOperationsInput | string;
    totalCopies?: Prisma.IntFieldUpdateOperationsInput | number;
    availableCopies?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BookSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    author?: boolean;
    isbn?: boolean;
    totalCopies?: boolean;
    availableCopies?: boolean;
    genreId?: boolean;
    genre?: boolean | Prisma.GenreDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["book"]>;
export type BookSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    author?: boolean;
    isbn?: boolean;
    totalCopies?: boolean;
    availableCopies?: boolean;
    genreId?: boolean;
    genre?: boolean | Prisma.GenreDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["book"]>;
export type BookSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    author?: boolean;
    isbn?: boolean;
    totalCopies?: boolean;
    availableCopies?: boolean;
    genreId?: boolean;
    genre?: boolean | Prisma.GenreDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["book"]>;
export type BookSelectScalar = {
    id?: boolean;
    title?: boolean;
    author?: boolean;
    isbn?: boolean;
    totalCopies?: boolean;
    availableCopies?: boolean;
    genreId?: boolean;
};
export type BookOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "author" | "isbn" | "totalCopies" | "availableCopies" | "genreId", ExtArgs["result"]["book"]>;
export type BookInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    genre?: boolean | Prisma.GenreDefaultArgs<ExtArgs>;
};
export type BookIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    genre?: boolean | Prisma.GenreDefaultArgs<ExtArgs>;
};
export type BookIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    genre?: boolean | Prisma.GenreDefaultArgs<ExtArgs>;
};
export type $BookPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Book";
    objects: {
        genre: Prisma.$GenrePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        title: string;
        author: string;
        isbn: string;
        totalCopies: number;
        availableCopies: number;
        genreId: number;
    }, ExtArgs["result"]["book"]>;
    composites: {};
};
export type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BookPayload, S>;
export type BookCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BookCountAggregateInputType | true;
};
export interface BookDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Book'];
        meta: {
            name: 'Book';
        };
    };
    findUnique<T extends BookFindUniqueArgs>(args: Prisma.SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BookFindFirstArgs>(args?: Prisma.SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BookFindManyArgs>(args?: Prisma.SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BookCreateArgs>(args: Prisma.SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BookCreateManyArgs>(args?: Prisma.SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BookDeleteArgs>(args: Prisma.SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BookUpdateArgs>(args: Prisma.SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BookDeleteManyArgs>(args?: Prisma.SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BookUpdateManyArgs>(args: Prisma.SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BookUpsertArgs>(args: Prisma.SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BookCountArgs>(args?: Prisma.Subset<T, BookCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BookCountAggregateOutputType> : number>;
    aggregate<T extends BookAggregateArgs>(args: Prisma.Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>;
    groupBy<T extends BookGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BookGroupByArgs['orderBy'];
    } : {
        orderBy?: BookGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BookFieldRefs;
}
export interface Prisma__BookClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    genre<T extends Prisma.GenreDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GenreDefaultArgs<ExtArgs>>): Prisma.Prisma__GenreClient<runtime.Types.Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BookFieldRefs {
    readonly id: Prisma.FieldRef<"Book", 'Int'>;
    readonly title: Prisma.FieldRef<"Book", 'String'>;
    readonly author: Prisma.FieldRef<"Book", 'String'>;
    readonly isbn: Prisma.FieldRef<"Book", 'String'>;
    readonly totalCopies: Prisma.FieldRef<"Book", 'Int'>;
    readonly availableCopies: Prisma.FieldRef<"Book", 'Int'>;
    readonly genreId: Prisma.FieldRef<"Book", 'Int'>;
}
export type BookFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where: Prisma.BookWhereUniqueInput;
};
export type BookFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where: Prisma.BookWhereUniqueInput;
};
export type BookFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithRelationInput | Prisma.BookOrderByWithRelationInput[];
    cursor?: Prisma.BookWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookScalarFieldEnum | Prisma.BookScalarFieldEnum[];
};
export type BookFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithRelationInput | Prisma.BookOrderByWithRelationInput[];
    cursor?: Prisma.BookWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookScalarFieldEnum | Prisma.BookScalarFieldEnum[];
};
export type BookFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithRelationInput | Prisma.BookOrderByWithRelationInput[];
    cursor?: Prisma.BookWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookScalarFieldEnum | Prisma.BookScalarFieldEnum[];
};
export type BookCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookCreateInput, Prisma.BookUncheckedCreateInput>;
};
export type BookCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BookCreateManyInput | Prisma.BookCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BookCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    data: Prisma.BookCreateManyInput | Prisma.BookCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BookIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BookUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookUpdateInput, Prisma.BookUncheckedUpdateInput>;
    where: Prisma.BookWhereUniqueInput;
};
export type BookUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BookUpdateManyMutationInput, Prisma.BookUncheckedUpdateManyInput>;
    where?: Prisma.BookWhereInput;
    limit?: number;
};
export type BookUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookUpdateManyMutationInput, Prisma.BookUncheckedUpdateManyInput>;
    where?: Prisma.BookWhereInput;
    limit?: number;
    include?: Prisma.BookIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BookUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where: Prisma.BookWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookCreateInput, Prisma.BookUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BookUpdateInput, Prisma.BookUncheckedUpdateInput>;
};
export type BookDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where: Prisma.BookWhereUniqueInput;
};
export type BookDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookWhereInput;
    limit?: number;
};
export type BookDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
};
