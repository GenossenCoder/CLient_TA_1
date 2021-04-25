import React, {useEffect ,useState,} from 'react'
import styles from '.././styles/News.module.css'

const News = () => {
    const[data, setData] = useState(null)
    
    const apiKey="de7a6efadb284f598012913141f52b42";
    let Topic="Climate change";
    let url='https://newsapi.org/v2/everything?q='+Topic+'&apiKey='+apiKey;
    
    useEffect(() =>{
        fetch(url)
        .then(res=>{
          return res.json()
        })
        .then((data)=>{
            setData(data)
        })
    }, [])
    let NewsJson=[]
    if(data){
        NewsJson = data.articles.slice(0,3)

    }

    return (
        <div className={styles.NewsForm}>
            <h1 className={styles.Header}>News</h1>
            <div className={styles.News}>
                <a className={styles.NewsHeader} href={data ? NewsJson[0].url:null}>{data ? NewsJson[0].title : null}</a>
                <br/>
                <br/>
                <span className={styles.Author}>{data ? NewsJson[0].author : null}</span>
                
                        
            </div>
             <div className={styles.News}>
                <a className={styles.NewsHeader} href={data ? NewsJson[1].url:null}>{data ? NewsJson[1].title : null}</a>
                <br/>
                <br/>
                <span className={styles.Author}>{data ? NewsJson[1].author : null}</span>
            </div>
            <div className={styles.News}>
                <a className={styles.NewsHeader} href={data ? NewsJson[2].url:null}>{data ? NewsJson[2].title : null}</a>
                <br/>
                <br/>
                <span className={styles.Author}>{data ? NewsJson[2].author: null}</span>
            </div>
        </div>
    )
}

export default News