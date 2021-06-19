import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import SearchThumbnailBox  from '../../components/search_thumnail_box/SearchThumbnailBox'
import { SearchAction } from '../../redux/search_product/SearchAction'
import { MainContainer , SearchResult, TopContainer } from './SearchPageStyled'


const priceLowtoHigh = (arr = []) => {
    const sorter = (a, b) => {
       return +a.price - +b.price;
    };
    arr.sort(sorter);
 };

 const priceHightolow = (arr = []) => {
    const sorter = (a, b) => {
       return +a.price - +b.price;
    };
    arr.sort(sorter).reverse();
 };

 const freshArival = (arr = []) => {
    const sorter = (a, b) => {
       return +a.id - +b.id;
    };
    arr.sort(sorter).reverse();
 };

 const populatrity = (arr = []) => {
    const sorter = (a, b) => {
       return +a.id - +b.id;
    };
    arr.sort(sorter);
 };


function SearchPage() {
    const {keywords} = useParams()
    const [searchArray, setsearchArray] = useState('')
    const [sortBy, setsortBy] = useState('')

    const searchResult = useSelector(state => state.searchResult)
    

    const {SearchLoading, SearchDetails} = searchResult
    

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(SearchAction(keywords))
    }, [dispatch,keywords])

    

    useEffect(() => {
        if(!SearchLoading&&SearchDetails){
            setsearchArray(SearchDetails)


        }
        
    }, [SearchDetails, SearchLoading , searchArray])


    //                 I tried this method my jsx  render after next state change 

    // useEffect(() => {
    //     if(sortBy==='Popularity'){
    //         setsearchArray(SearchDetails)
    //     }
    //     if(sortBy==='Low to High'){
    //         priceLowtoHigh(searchArray);
        
    //     }
    //     if(sortBy==='High to Low'){
    //         priceHightolow(searchArray);
        
    //     }
    //     if(sortBy==='Fresh Arival'){
    //         freshArival(searchArray);
        
    //     }
    // }, [sortBy,searchArray,SearchDetails ])


    if(sortBy==='Popularity'){
        populatrity(searchArray);
    }
    if(sortBy==='Low to High'){
        priceLowtoHigh(searchArray);
    
    }
    if(sortBy==='High to Low'){
        priceHightolow(searchArray);
    
    }
    if(sortBy==='Fresh Arival'){
        freshArival(searchArray);
    
    }

    

    
    
    return (
        <MainContainer>
            <TopContainer>
                <p>Showing Result For <span style={{fontWeight:'600', fontSize:'18px'}} >"{keywords}"</span></p>
                <div className='sort-by'>
                    <form > 
                        <label htmlFor="sortby">Sort By : </label>
                        <select onChange={(e)=>setsortBy(e.currentTarget.value)} name="sortby" id="sort-by">
                            <option  value="Popularity">Popularity</option>
                            <option value="Low to High">Low to High</option>
                            <option value="High to Low">High to low</option>
                            <option value="Fresh Arival">Fresh arrival</option>
                        </select>
                    </form>
                </div>
            </TopContainer>

            <SearchResult>
                {searchArray&&searchArray.length>0?
                searchArray.map(item=> <SearchThumbnailBox key={item.id} item={item} />)

                :<p style={{textAlign:'center', fontSize:"34px", fontWeight:'600' , paddingTop:'30vh'}} > No result found</p>

                }
            </SearchResult>

            
        </MainContainer>
    )
}

export default SearchPage
