const api_key= "b3967cd63465df5a6b6ef595756311d9"
export const categorias = [
    {
        name:"trending",
        titulo:"em alta",
        path:`trending/all/week?api_key={API_KEY}&languange=pt-BR,`
    },
    {
        name:"netiflixOriginais",
        titulo:"Originais da netiflix",
        path:`discolver/tv?api_key={API_KEY}&whith_genes=35,`
    },
    {
        name:"topRated",
        titulo:"polulares",
        path:`movie/top_rated?api_key={API_KEY}&languange=pt-BR,`
    },
    {
    name:"comedy",
    titulo:"comedia",
    path:`discolver/tv?api_key={API_KEY}&whith_genes=35,`
    },
    {
    name:"romances",
    titulo:"Romanticos",
    path:`discolver/tv?api_key={API_KEY}&whith_genes=10749,`
    },
    {
    name:"documentaries",
    titulo:"Documenrios",
    path:`discolver/tv?api_key={API_KEY}&whith_genes=99,`
    }
];

export const  getMovies = async (path) =>{
    try {
        let url=`https:/api.themviedb.org/3/${path}`;
        const responce = await fetch(url);
        return await responce.json();
        
    }catch(error){
        console.log("error getMovies:",error);
    }
}
