export interface LibroPage {
    content:          Libro[];
    pageable:         Pageable;
    last:             boolean;
    totalPages:       number;
    totalElements:    number;
    size:             number;
    number:           number;
    sort:             Sort;
    first:            boolean;
    numberOfElements: number;
    empty:            boolean;
}

export interface Libro {
    id:                 number;
    titulo:             string;
    slug:               null | string;
    descripcion:        null | string;
    precio:             number;
    fechaCreacion:      Date;
    rutaPortada:        null;
    rutaArchivo:        null;
    fechaActualizacion: Date | null;
}

export interface Pageable {
    sort:       Sort;
    offset:     number;
    pageSize:   number;
    pageNumber: number;
    unpaged:    boolean;
    paged:      boolean;
}

export interface Sort {
    empty:    boolean;
    sorted:   boolean;
    unsorted: boolean;
}
