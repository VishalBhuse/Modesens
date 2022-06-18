import { v4 as uuid } from "uuid";
import { useState } from "react";
import "./Likes.css";

function Likes() {
  const [value, setValue] = useState(null);
  const [data, setData] = useState([]);

  const handle = (e) => {
    setValue(e.target.value);
  };

  const show_post = () => {
    const fi = {
      id: uuid(),
      title: value,
    };
    setData([...data, fi]);
  };
  console.log(data);

  return (
    <>
      <div className="container">
        <div className="head">
          <div>
            <div style={{ display: "flex" }}>
              <img
                style={{
                  height: "55px",
                  borderRadius: "50%",
                  marginTop: "35px",
                }}
                src="data:image/png;base64,
                                 iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEUAAAD////
                                 X19cuLi6Ojo7z8/Pb29u6urrk5OT39/fl5eUoKCisrKzh4eHKysrFxcUWFhakpKRycn
                                 KysrLR0dFBQUGIiIhlZWWampohISF7e3vt7e0ICAgbGxtubm62traTk5NVVVU3Nzd
                                 LS0tfX19PT09DQ0N/f386OjpJYAPmAAAFSElEQVR4nO2d6XLiOhBGJWwWL2C2EIi5wE
                                 xmJnn/J7xsAQx2pCC1v7arz89U2dWn7Eii3WopXUWehZvPZKyawPh9Gvbzcg9V/uf+9D
                                 901D8n+ehZGg4+0LE+ze+ZhWHvFzpMN1KDYbRBR+hM0vnOcIYOzwthteErOjZPvEflhvEK
                                 HZk/hmWGc3RUXhk+Go7QMXlmeG/Yrid4ICoaDtHx+OelaNiM9efPWNwa/kFHQ0LnapiiY6E
                                 huBh20aFQkX4ZtmUp88jZsIOOg47ZyfAdHQcdwdGwxY/wsLLZG07RUVAS7g0jdBCkBHvDLToIWnLV4qniSK
                                 Y0OgRilqqHDoGYN9WO3FM1f9UCHQIxK9XO3023JOgAyFmjAxAEQRAEQRAEQRAEQRAEQRAEHiSBIyvuSfey
                                 HQ4/JhqMZou/aJUKOub4rRlOOFb2+DTc0519oo3u8Wy4Z8TM0b+h1hmrPQMUhlq/obVuoDHUGdrrCpGh
                                 HrApPKcy1BGXDZBkhrrLZLFDZ6hjtNsJQkMmww2lIY9Jg9SQxU4eWsM+Wk9RG+p/aD9yQwaDDbGhxi/CqQ13aEFyQ/zOT2
                                 pDfKE9uSG8x4PZMFqEBXbLdJtVdFopYcLfsHz75mo6sjOEzxfPGu4JrN5w+H4QB8Pj/keXy+vByVBlZkP41jo3w4oeTm0ynLT
                                 e8KX1hioyXQ5ftrkaxqbLmzwf2l0Pb2hBbgjfae5qaFygwpNRroamq+EDjavhL9PVy7pEKnE0NK5Mm5Cn+c5wbbqYQQMyN8O56eKX2kQqof311Iyct8svYA6fEJ81TN4sshjw2f7A
                                 zzNRYbjcjqwyUTy6rhBmE+EZmhN0hvjVzAkyQyZPkM4Qngi+QGPYZdSPmsQQv9y+wb9hN0Q7FfFtmDF6P0/4Nhym8M9pd5BU0LJqsEYzluY7tNcVqvkw2qHNviCsvmTyrkptohNdDhsTiGsxGMyO1NUm+IZ55PU0v1tv2IBKBVfQGUULw23/nmw+jI0ffy+AR5vn86Xr19T4AfgIeFeCW1b/n1XpFzZt6vr98NXCEPsQXQ3Vp4UidGnjbKj+mA2h1QruhhbFbXkdJlV4MAzMDxHZCtiDoRoY74HcAOXDcGu8BzID7sNwZ7wH8rgtH4YL4z2Q36F8GIbGeyB3XfgwNJfRNt3QWHPSeEOzILIow4Phh4VhHSoVeDDstt3QZltJow2XNoKDemRKcTU0r9gOIEsUnQzXoWU+qpHr0vFmYp+JRGZqLKLsPRDHNuPnDchydvqMsMYONPUYQgukajGE1kLXYYitUqzDENumpgZDaC6xFkNwpyF6Q+hUUYshelMJuSG81pTaEH9YMbEheBylN4zgO0ipq744HD9JaZgzeIKkhjxKEwkNP9BqZ6gMRyze0AM0hj18SeIFAsN4Aq9HvMWzYZ6FrPSUP8MoHqVTjm31nc9GyO
                                 fZZPEaoDW+wel8CzbjpSAIgiAIgiAIgiAIgiAIgiAILODQ5pUWLsd9UrFS6MI4al4Ui169hGwUsz6M3tkpdIMbavqKyZm0ZORK
                                 t3swTbRiU11Fw2JviOxXQE9vb9jq13SlD4Z8Gkv7Z3Y0xB+ESYc+Gb
                                 b3IaZnw9b+Jyb6y7Ctw2nnYojePEXEqe/Nue0G5+LAZzmfPHg2hPfQJCAqGLI5L8MfQ100bJ3il+DVUMdtykmtr41Dbxr8RBx6S/shuDmLqNDCaIGOzBOFrkXFJk1zDpvFXFkVO2vdt6GCH/vpzH1Ln8dGW2mTn+P4sfdbWSuxXtjMJ
                                 c74razzW0WztDwLp+9JY+aPdbDZZRWdpf8HyEhFj1gUF4YAAAAASUVORK5CYII="
                alt="user_icon"
              />
              <span
                style={{
                  fontSize: "20px",
                  marginTop: "47px",
                  marginLeft: "15px",
                }}
              >
                User_name
              </span>
            </div>
            <h4 style={{ fontWeight: "bold", margin: "10px" }}>Likes</h4>
          </div>
          <div>
            <button className="publish_List">PUBLISH LIST</button>
            <button style={{ marginTop: "-10px" }}>
              <img
                style={{
                  height: "50px",
                  paddingTop: "15px",
                  width: "auto",
                  marginBottom: "-12px",
                }}
                src="https://img.icons8.com/fluency-systems-regular/344/share.png"
                alt="share_icon"
              />
            </button>
            <div className="icons">
              <img
                style={{ height: "32px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScmCA5F5L4L7_vHFN-tRHfHt2AckI-ApkeMw&usqp=CAU"
                alt="lock_iocn"
              />
              <img
                style={{ height: "32px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-YfQeBP-NuQZHBf2BaOK91FFIbT44k889Mw&usqp=CAU"
                alt="pen_icon"
              />
              <img
                style={{ height: "32px" }}
                src="data:image/jpeg;base64,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"
                alt="arrow_iocn"
              />
              <img
                style={{ height: "32px" }}
                src="data:image/png;base64,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"
                alt="camera_icon"
              />
              <img
                style={{ height: "32px" }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAAYFBMVEX///8AAADm5ubs7Oz4+Pj19fXw8PA0NDRBQUE8PDykpKTCwsLc3NxmZmawsLAgICDLy8t6enqOjo4sLCydnZ1WVla6urpdXV2EhIRycnIYGBjU1NQlJSUODg5tbW1LS0uflzq3AAAErElEQVR4nO1b55qjMAwE0wm9hUDK+7/l7Vo0s2mSxbF3X+ZvsBmskTwuMYwPPvjgP4PtWkIIy7X3eb0rDkV88wOvPJde4N/i6iCcv8pAhFfP/Ak/D92/xCCqzncIjAhCsTkD+1BfnlD4Rhdn20qkub1gAKgP21E4lMqrbm2VNFnfZ1mTVK1K75ZtQyGq53ekcRitx9yOqribH7luoY1q0kIXN9aDh0QySyYNuSlYx+kTi+jpk1E7DwavQJvp86rXD9vV9DSnMsKx1/ZRHFSIfHj+krBxKIYug+eBWCIbE4lLGPHQ3xuRWGAcjJaFwwk6O2Pje+j4WAxiD95TwxKio4zgPQx6OFKyzfWhsa46E+jmRGvtDNVFbyqJhnGgtneh1Kf4WM6wYTxv9MrnQBWvNUhAmnk6tm1QJ12cBwjG+yVqi05SlppXaAUE5qFYk4NhBBp5aklNnfW9CaRYR2pbsBSauSdKWIVUhM/AwXBLapIBfR5XkhAH1e7YBuILcrl0QzcDQ9cwkYBE67HN5NTjczlVqN45spXL5ARGwASAbARS4lu/ZJQp/Up2MvfhyFVigWpjebzRGFwiTmM9czTGeKDMTUjR0VM4eFFceebPBewaLYqAw0ioaLHf5ZT6HnkNGeEaoUxpDC/oKvsU0uZhllBSyinvVou0Nh3CasrZy+Pd4nCxc5gs2h4rB8PG+hNJIuAlYXxIaJHYWxPNBiQcbHbIwlLyHhtYWBL9BVlY3oAsgCWiAMLCh3ePXIbYx4yux7UCnCFdP2rLh+AIX0H6bdTeV8ueHnaJtigNu72D5EBpPcJWlpeQ9e+CynpYJvBsSwNigmuVogj4TlvFmeBaM2x9e4GGtJAx0Rn1FDK8Z2yrgtVmwooOvYaAZlz1Kid+Euw+8phdKBKEFR1sB/MszHN8pQLYcO6sc0gwoqcOxJhV2H2me6g18h2GQn9FCvsMxIMbGMVU1+UJk6oICblLYV71OMDGBD3ZrY5WYxTAkabGNDSc2ujs61Z6wfgGfMaFbiyG6wZa5caGuknex4PJmH6kCXDhHIyY5MM4aBxpAno42Owo5WI4XjZ97cl4ECdhFTJdKDED7RXlyAJZwJ3YnOGxsUDdoDiYCgLtiPSDOs3i3Q+aLtVM8LWnYzFe+SvfU0Z4536e1ok7YPqyS/KqMzf8yUCy0DeszXSjzSue9GZHxXRR8ry6LqifqYZYXL2Lw/sRtsL5Ypp5EoYIuCNiNMtLiF6b9EuZulnSLi+LBjKVXPUCq8dhFiu1zy7141Pe5qejn3bKL/4oYFcdC4aIfI93ar5GuRCv8FUWPLtxzfHBq0dc1WnGWkWEaZHthHH3gEB3/ZnBtspCv3aOsLKiDlQmaVAX2V3hWauIcJ6jOFHWhF+qPJ3yImmy6PE4i1VE9rnv7myQqXhsGZH3scpUfZdDwrp27sPCUWsnX6aisK6dO6lzm9qJxKp2MrgcCn5JpvK7HAK2cDkEFr8jIpu4HCzWmbpT7dzK5aCwztR91Pk7XM6vrJ2cp20IKJka7/Qvy2Xt1Nzc08HkcjT3rfUwRIT532JYyNq5YywAX5nKetWRBtHuG4sPPvjgH8QfDMIq//YcqPYAAAAASUVORK5CYII="
                alt="search_icon"
              />
            </div>
          </div>
        </div>

<<<<<<< HEAD
                            <div className='show_products'>
                              products
                              </div>   
                              <h1 style={{marginLeft:"78px",marginTop:"25px",fontWeight:"600",fontSize:"20px"}}>Share Your Thoughts</h1>  
                            <div className='comment_div'>
                            <input onChange={han  dle} type="text" placeholder='Add a comment...' />
                              <img style={{height:"35px"}} src="https://cdn-icons.flaticon.com/png/128/5124/premium/5124630.png?token=exp=1655366357~hmac=93f4b81b2bad2141c3af56ed3028f6bd" alt="COMMENT" />
                              <button onClick={show_post}>POST</button>
                            </div>
                            <h1 style={{marginLeft:"78px",fontWeight:"600",fontSize:"20px",marginTop:"25px"}}>More From User_Name</h1>
=======
        <div className="show_products">products</div>
        <h1
          style={{
            marginLeft: "78px",
            marginTop: "25px",
            fontWeight: "600",
            fontSize: "20px",
          }}
        >
          Share Your Thoughts
        </h1>
        <div className="comment_div">
          <input onChange={handle} type="text" placeholder="Add a comment..." />
          <img
            style={{ height: "35px" }}
            src="https://cdn-icons.flaticon.com/png/128/5124/premium/5124630.png?token=exp=1655366357~hmac=93f4b81b2bad2141c3af56ed3028f6bd"
            alt="COMMENT"
          />
          <button onClick={show_post}>POST</button>
        </div>
        <h1
          style={{
            marginLeft: "78px",
            fontWeight: "600",
            fontSize: "20px",
            marginTop: "25px",
          }}
        >
          More From User_Name
        </h1>
>>>>>>> f8ad9a67d44010048a861f496245d00d329195d4

        <div className="post">
          {/* <ol>                            
                                 {
                                  data.length==0? "Oops! Nothing Posts Yet" :
                                  data.map(({title})=>(
                                 <li>{title}</li>

                                  ))
                              }  
                              </ol>     */}
        </div>
      </div>
    </>
  );
}

export default Likes;
