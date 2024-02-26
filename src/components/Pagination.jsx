import React from 'react'
import styles from './pagination.module.css'
function Pagination({totalItems,itemsPerPage,setCurrentPage,currentPage}) {
    let pages = [];
    for(let i=1;i<=Math.ceil(totalItems/itemsPerPage);i++)
    {
        pages?.push(i);
    }
  return (
    <div className={styles.pageDiv}>
      {
        pages?.map((page,index)=>{
            return <button key={index} className={page==currentPage ? `active ${styles.pageBtns}` : `${styles.pageBtns}`} onClick={()=>setCurrentPage(page)}>{page}</button>
        })
      }
    </div>
  )
}

export default Pagination
