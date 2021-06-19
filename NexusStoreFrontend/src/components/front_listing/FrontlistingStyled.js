import styled from 'styled-components'


export const MainContainer = styled.div`
    width: 100%;
    
   
    margin-top: 70px;
    
    .main-slider{
        z-index: 1;
    }


    .rec.rec-arrow {
        color:grey;
        background-color:white;
        height: 50px;
        width:30px;
        border-radius: 4px;
        height: 70px;
        min-width: 30px;
        z-index: 1;

        
        
    
}
    .rec.rec-arrow:hover{
        color:red;
        background-color:rgba(0,0,0,0.5);
        border:none;
    
}
    .rec-arrow-right{
        background-color:transparent;
        border:none;
        outline:none;
        
        position:absolute;
        margin:0px;
        right:0px;
        
    }
    .rec-arrow-left{
        background-color:transparent;
        border:none;
        outline:none;
        
        position:absolute;
        left: 0px;
        z-index:2;
        width:20px;
    }
    
    .rec-pagination{
        display: none;
    }
    .rec-slider-container{
            margin:0;
        }
    .rec.rec-arrow:disabled {
        visibility: hidden;
    }


    @media only screen and (max-width: 650px){
        margin-top: 75px;

        .rec-pagination{
            display: inline-block;
            position: absolute;
            margin-top: 180px;
            
            
        }
        .rec.rec-arrow {
            display: none;
        }
        .rec-dot{
            background-color: grey;
            height: 4px;
            width: 4px;
            box-shadow:none;
        }
        .rec-dot_active{
            height: 5px;
            width: 6px;
            border: none;
            box-shadow:none;
            background-color: white ;
        }
        

}
    
    
`


export const ImageContainer = styled.div`

img{
    width:100%;
    min-height: 200px;
    object-fit: cover;
}



    
    
`
