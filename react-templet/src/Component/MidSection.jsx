

// import React from 'react';



// const MidSection = () => {
//     return (
//         <>
//             <div>hello i am MidSection</div>
//         </>
//     )
// }


// export default MidSection;


import React from 'react';
import backgroundImage from './Image/Mid.jpg';
import './CSS/Banner.css';

const MidSection = () => {
    return (
        <>
            <div className="Digitalbanner1 h-100 container-fluid" style={{ backgroundImage: `url(${backgroundImage})`}}>
                <h2 className="content1"><b className="">Take The Strees Out Of <span className='text-success1'>Lunch-Prep!</span></b></h2>
                <div class="card-group mt-5">
                    <div class="card cardMidmain border border-info-subtle rounded-5">
                    <div class="card-body cardMid">
                        <img className='cardMidimg' src="https://thumbs.dreamstime.com/b/little-cute-panda-lies-sunning-beach-under-umbrella-vector-outline-illustration-linear-style-white-background-kawai-179302429.jpg" alt="" />
                        <p class="card-text mt-2 font-monospace">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                    <div class="card cardMidmain border border-info-subtle rounded-5 ms-3">
                        <div class="card-body cardMid">
                            <img className='cardMidimg' src="https://png.pngtree.com/png-clipart/20210310/original/pngtree-line-drawing-cooking-chef-png-image_5931934.jpg" alt="" />
                            <p class="card-text mt-2 font-monospace">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                    <div class="card cardMidmain border border-info-subtle rounded-5 ms-3">
                        <div class="card-body cardMid">
                            <img className='cardMidimg' src="https://media.istockphoto.com/id/1295994651/vector/articulated-lorry-vector-icon-isolated-delivery-shipping-truck-flat-symbol-vector.jpg?s=612x612&w=0&k=20&c=LL4gM3kNEtAxlaYbNTqIv5NShqRgvh0fToG2VOSroyI=" alt="" />
                            <p class="card-text mt-2 font-monospace">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                    <div className="card cardMidmain border border-info-subtle rounded-5 ms-3">
                        <div className="card-body cardMid">
                            <svg className='cardMidimg' width="655.86" height="506.44" viewBox="0 0 655.86 506.44">
                                <path d="m350.22,378.66c-1.77,10.71-11.09,18.91-22.29,18.91s-20.53-8.2-22.29-18.91h-57.04v123.61h158.66v-123.61h-57.04,0Z" fill="#dfdfdf" strokeWidth="0"/>
                                <rect x="251.36" y="501.81" width="15.68" height="2.77" fill="#bcb9cb" strokeWidth="0"/>
                                <rect x="390.19" y="502.27" width="15.68" height="2.77" fill="#bcb9cb" strokeWidth="0"/>
                                <rect x="249.06" y="492.47" width="158.66" height="4.3" fill="#2f2e41" strokeWidth="0"/>
                                <path d="m647.01,381.89H8.85c-4.88,0-8.85-3.97-8.85-8.85V8.85C0,3.97,3.97,0,8.85,0h638.16c4.88,0,8.85,3.97,8.85,8.85v364.2c0,4.88-3.97,8.85-8.85,8.85h0Z" fill="#2f2e41" strokeWidth="0"/>
                                <rect x="16.14" y="15.68" width="624.49" height="352.37" fill="#fff" strokeWidth="0"/>
                            </svg>
                            <p class="card-text mt-2 font-monospace">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <h1 className="content1">Why Lunsj <span className='text-success1'>Pa Dora?</span></h1>
                <p className="content3">Lorem ipsum dolor sit amet consectetur,<br /> adipisicing elit Quos atque assumenda maxime quae modi iure placeat quis, sapiente, perferendis laudantium delectus sunt cumque quidem totam deleniti iste aspernatur commodi facilis ab. <br /> Eum impedit iusto alias veniam, doloribus iste odit iure reiciendis doloremque possimus nam. Voluptatem dignissimos voluptatibus quo corrupti rerum repudiandae animi ut quaerat nihil!</p>
                <button class="btn btn-success content4" type="submit">Our Story</button>
            </div>
        </>
    )
}


export default MidSection;