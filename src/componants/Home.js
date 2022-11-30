import React from 'react'

export default function Home() {
    return (
        <>
            <div className="conatiner-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <h1>Be A Coder Ninja</h1>
                        <p className="para">50,000 Students from 300 colleges have trusted us</p>
                        <button className="e-btn" type="submit"><a href="#">Explore Our Program</a></button>
                    </div>
                    <div className="col-sm-6">
                        <img src="./images/avatar.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="container" id="box">
                <div className="row m-2">
                    <h2>If you have the courage and the commitment to learn coding, then Coding Ninjas will empower you.</h2>
                    <div className="col-sm-4">
                        <img src="./images/box.svg" alt="" />
                        <h6>Content designed by <br /> IIT & Stanford alumni</h6>
                    </div>
                    <div className="col-sm-4">
                        <img src="./images/box2.svg" alt="" />
                        <h6>Instant 1:1 doubt <br /> resolution</h6>
                    </div>
                    <div className="col-sm-4">
                        <img src="./images/box3.svg" alt="" />
                        <h6>Practical learning with 100+ problems & 10+ <br /> projects in each course</h6>
                    </div>
                </div>

            </div>
            <h1>14,000+ CODING NINJAS TO INSPIRE YOU</h1>
        </>

    )
}
