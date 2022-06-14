import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export const dataListItem=[

    {
        id:1,
        path:'/home',
        title:'Home',
        category:'categoryHome',
        icone:<KeyboardArrowDownRoundedIcon/>,  
        subMenu:[
            {
                id:1,
               category:'categoryHome1' ,
               title:'Home1',  
               path:'/home1',
               icone:<ArrowRightIcon/>, 
               iconeM:<ChevronLeftIcon/>, 
               subMenu:[

                        {
                            id:1,
                            category:'home1' ,
                               title:'Hom1',  
                               path:'/contact1',
                               icone:'', 
                        },
                        
                        {
                            id:2,
                            category:'home1' ,
                               title:'Hom1',  
                               path:'/contact1',
                               icone:'', 
                        },

               ],
            },
            {
                id:2,
                category:'categoryHome2',
                title:'Home2',  
                path:'/Home2',
                icone:<ArrowRightIcon/>, 
                iconeM:<ChevronLeftIcon/>, 
                subMenu:[

                    {
                        id:2,
                        category:'home2' ,
                           title:'Hom2',  
                           path:'/contact1',
                           icone:'', 
                    }
                ],
             },
             {
                id:3,
                category:'categoryHome3',
                title:'Home3',  
                path:'/Home3',
                icone:<ArrowRightIcon/>, 
                iconeM:<ChevronLeftIcon/>, 
                subMenu:[

                    {
                        id:3,
                        category:'home3' ,
                           title:'Hom3',  
                           path:'/home3',
                           icone:'', 
                    }
                ],
             },
             {
                id:4,
                category:'categoryHome4',
                title:'Home4',  
                path:'/Home4',
                icone:<ArrowRightIcon/>, 
                iconeM:<ChevronLeftIcon/>, 
                subMenu:[

                    {
                        id:4,
                        category:'home4' ,
                           title:'Hom4',  
                           path:'home4',
                           icone:'', 
                    }
                ],
             },
             {
                id:5,
                category:'categoryHome5',
                title:'Home5',  
                path:'/Home5',
                icone:<ArrowRightIcon/>, 
                iconeM:<ChevronLeftIcon/>, 
                subMenu:[

                    {
                        id:5,
                        category:'home5' ,
                           title:'Hom5',  
                           path:'home5',
                           icone:'', 
                    },
                    
                    {
                        id:6,
                        category:'home5' ,
                           title:'Hom5',  
                           path:'home5',
                           icone:'', 
                    }
                ],
             },
        ]   
    },
    {
        id:2,
        path:'/products',
        title:'products',
        category:'categoryProduc' ,
        icone:<KeyboardArrowDownRoundedIcon/>,
        subMenu:[
            {
                id:3,
               category:'electronics' ,
               title:'electronics',  
               path:`/products/category/electronics`,
               icone:<ArrowRightIcon/>,  
               iconeM:<ChevronLeftIcon/>, 
               subMenu:[

                        {
                            id:7,
                            category:'categorycontact1' ,
                               title:'product',  
                               path:'/contact1',
                               icone:'', 
                        }
               ],
            },
            {
                id:4,
                category:'jewelery' ,
                title:'jewelery',  
                path:`/products/category/jewelery`,
                icone:<ArrowRightIcon/>, 
               
             },
             {
                id:4,
                category:`men's clothing` ,
                title:`men's clothing`,  
                path:`/products/category/men's clothing`,
                icone:'', 
             },
             {
                id:4,
                category:`women's clothing` ,
                title:`Women's clothing`,  
                path:`/products/category/women's clothing`,
                icone:'', 
             },
        ]    
    },
    {
        id:3,
        path:'/about',
        title:'about',
        category:'categoryAbout' ,
        icone:<KeyboardArrowDownRoundedIcon/>,
        subMenu:[
            {
                id:5,
            category:'categoryabout1' ,
               title:'about',  
               path:'/about1',
               icone:<ArrowRightIcon/>, 
               iconeM:<ChevronLeftIcon/>, 
               subMenu:[

                {
                    id:7,
                    category:'categorycontact1' ,
                       title:'about',  
                       path:'/contact1',
                       icone:'', 
                }
       ]
            },
            {
                id:6,
                category:'categoryabout2' ,
                title:'about',  
                path:'/about2',
                icone:'', 
             },
        ]    
    },
    {
        id:4,
        path:'/contact',
        title:'contact',
        category:'categoryContact' ,
        icone:<KeyboardArrowDownRoundedIcon/>,
        subMenu:[
            {
                id:7,
            category:'categorycontact1' ,
               title:'contact1',  
               path:'/contact1',
               icone:<ArrowRightIcon/>, 
               iconeM:<ChevronLeftIcon/>, 
               subMenu:[

                        {
                            id:7,
                            category:'categorycontact1' ,
                               title:'contact1',  
                               path:'/contact1',
                               icone:'', 
                        }
               ]
            },
            {
                id:8,
                category:'categorycontact2' ,
                title:'contact2',  
                path:'/contact2',
                icone:'', 
             },
        ]    
    },
    {
        id:5,
        path:'/',
        title:'',
        icone:<HomeIcon/>,   
    }
]