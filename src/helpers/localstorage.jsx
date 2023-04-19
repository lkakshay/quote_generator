

export const getLoacalData=()=>{
    const userData = JSON.parse(localStorage.getItem('bookmarkedquote'))||[]
    return userData
}

export const setLoacalData=(data)=>{
    localStorage.setItem('bookmarkedquote', JSON.stringify(data));
}