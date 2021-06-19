import styled from 'styled-components'



export const MainContainer = styled.div`
    
    background-color: white;
    padding: 2px 10px;
    border-radius: 3px;
    
    margin-bottom: 3px;
    a{
        text-decoration: none;
        color:grey;
    }
    .details-section{
        padding-left: 50px;
        p{
            font-size: 13px;
            font-weight: 500;
        }
        h5{
            font-size: 19px;
            font-weight: 600;
            color: black;
        }
        #price{
            color:red;
            font-size: 19px;
            font-weight:500;
        }
        
    }

    @media only screen and (max-width: 650px){
        width: auto;
        .details-section{
        h5{
            font-size: 15px;
        }
        #price{
            color:red;
            font-size: 14px;
            font-weight:500;
        }
        }
    }
    

`

export const ThumbnailBox = styled.div`
   
    display: flex;
    justify-content: start;
    align-items: center;
    overflow: hidden;
    margin: 2px 10px;
    width: 100%;



    .qty{
        button{
            width: 25px;
            height: 25px;
            background-color: transparent;
            border: 0.5px solid lightgray;
            outline: none;
            border-radius: 50%;
            cursor: pointer;
        }
        #qty-value{
            border-radius: 3px;
            width: 50px;
            height: 20px;
            background-color: snow;
            border:1px solid lightgray;
            display: inline-block;
            text-align: center;
            margin:1px 3px;
        }
        
    }

    .qty-remove{
            display: flex;
            
        }

        .remove-button{
            button{
                margin-left: 10px ;
                background-color: transparent;
                border:none;
                outline: none;
                cursor: pointer;
                font-size: 16px;
                font-weight: 500;
                
            }
        }


    @media only screen and (max-width: 550px){

        .qty{
        button{
            width: 20px;
            height: 20px;
            
        }
        #qty-value{
            
            width: 30px;
            height: 20px;
            margin:1px 1px;
            
        }
        
    }

    .qty-remove{
            display: flex;
            
        }

        .remove-button{
            button{
                margin-left: 5px ;
                background-color: transparent;
                border:none;
                outline: none;
                cursor: pointer;
                font-size: 14px;
                font-weight: 500;
                
            }
        }



    }



`
 
export const ImageContainer = styled.div`
    max-width: 220px;
    height: 170px;


    img{
        max-width: 210px;
        min-width: 180px;
        height: 170px;
        object-fit: cover;
        border-radius: 8px;
        
        
    }




    @media only screen and (max-width: 650px){

        img{
            max-width: 140px;
            width: 140px;
            min-width: auto;
            min-height: 100px;
            max-height: 150px;
            
        }

    }


`
