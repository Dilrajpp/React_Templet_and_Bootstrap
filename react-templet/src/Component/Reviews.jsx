
import React from 'react';
import backgroundImage from './Image/Review.jpg';
import './CSS/Banner.css';



const Reviews = () => {
    return (
        <>
            <div className='bg-body-secondaryyes' style={{ backgroundImage: `url(${backgroundImage})`,  width: '99%', height: '900px'}}>
                <h4 className="content1">Reviews</h4>
                <h6 className="content1">We Save You Serious <span className='text-success1'>Stress</span></h6>
                <div>
                    <h1 className='text-success1 dot'>.?</h1>
                    <div class="card cardimage1" style={{ width: "18rem" }}>
                        <img className='rounded' src="https://cdn.zeebiz.com/sites/default/files/2022/11/05/209096-virat-kohli-7-pti.jpg" class="card-img-top" alt="..."/>
                        <h3 className='text-success1'>"</h3>
                        <div class="card-body">
                            {/* <b class="card-title">Card title</b> */}
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <b class="Virat Kohli">Card title</b>
                            <p>CO-owner - <small>Virat sir</small></p>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                    <div class="col">
                        <div class="card cardimage2" style={{ width: "18rem" }}>
                            <img src="https://cdn.zeebiz.com/sites/default/files/2022/11/05/209096-virat-kohli-7-pti.jpg" class="card-img-top" alt="..."/>
                            <h3 className='text-success1'>"</h3>
                            <div class="card-body">
                                {/* <b class="card-title">Card title</b> */}
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <b class="Virat Kohli">Card title</b>
                                <p>CO-owner - <small>Virat sir</small></p>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <svg className='mb-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#a2d9ff" fill-opacity="1" d="M0,224L7.3,186.7C14.5,149,29,75,44,64C58.2,53,73,107,87,117.3C101.8,128,116,96,131,90.7C145.5,85,160,107,175,117.3C189.1,128,204,128,218,112C232.7,96,247,64,262,53.3C276.4,43,291,53,305,58.7C320,64,335,64,349,80C363.6,96,378,128,393,128C407.3,128,422,96,436,85.3C450.9,75,465,85,480,112C494.5,139,509,181,524,197.3C538.2,213,553,203,567,208C581.8,213,596,235,611,224C625.5,213,640,171,655,160C669.1,149,684,171,698,192C712.7,213,727,235,742,213.3C756.4,192,771,128,785,122.7C800,117,815,171,829,208C843.6,245,858,267,873,261.3C887.3,256,902,224,916,213.3C930.9,203,945,213,960,208C974.5,203,989,181,1004,192C1018.2,203,1033,245,1047,224C1061.8,203,1076,117,1091,85.3C1105.5,53,1120,75,1135,117.3C1149.1,160,1164,224,1178,218.7C1192.7,213,1207,139,1222,106.7C1236.4,75,1251,85,1265,112C1280,139,1295,181,1309,186.7C1323.6,192,1338,160,1353,149.3C1367.3,139,1382,149,1396,149.3C1410.9,149,1425,139,1433,133.3L1440,128L1440,320L1432.7,320C1425.5,320,1411,320,1396,320C1381.8,320,1367,320,1353,320C1338.2,320,1324,320,1309,320C1294.5,320,1280,320,1265,320C1250.9,320,1236,320,1222,320C1207.3,320,1193,320,1178,320C1163.6,320,1149,320,1135,320C1120,320,1105,320,1091,320C1076.4,320,1062,320,1047,320C1032.7,320,1018,320,1004,320C989.1,320,975,320,960,320C945.5,320,931,320,916,320C901.8,320,887,320,873,320C858.2,320,844,320,829,320C814.5,320,800,320,785,320C770.9,320,756,320,742,320C727.3,320,713,320,698,320C683.6,320,669,320,655,320C640,320,625,320,611,320C596.4,320,582,320,567,320C552.7,320,538,320,524,320C509.1,320,495,320,480,320C465.5,320,451,320,436,320C421.8,320,407,320,393,320C378.2,320,364,320,349,320C334.5,320,320,320,305,320C290.9,320,276,320,262,320C247.3,320,233,320,218,320C203.6,320,189,320,175,320C160,320,145,320,131,320C116.4,320,102,320,87,320C72.7,320,58,320,44,320C29.1,320,15,320,7,320L0,320Z"></path>
                </svg>
            </div>
        </>
    )
}


export default Reviews;