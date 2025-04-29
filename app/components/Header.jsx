export default function(){
    return(
        <div className="headerContainer">
            <div className="headerLogo"><img src="./logo.png" alt="" /></div>
            <div className="headerSearchContainer">
                <input placeholder="Type here to search" type="text" className="headerInput" />
          <div className="headerSearch"><img src="./search.png" alt="" />
          </div></div>
        </div>
    )
}