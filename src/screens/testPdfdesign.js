import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import Barcode from 'react-barcode';
import applicantimg from "../image_placeholder/user.png"
import applicantsmallimg from "../image_placeholder/smallimg.png"
import smallapplicantimage from "../image_placeholder/smallapplicantimage.jpeg"
import saudiforeignaffairs from "../image_placeholder/saudiforeignaffairs.jpg"
import saudiforeignaffairslogo from "../image_placeholder/saudiforeignaffairslogo.png"
import saudilogo from "../image_placeholder/saudilogo.jpeg"

const TestpdfDesign = () => {
    const [fileName, setFileName] = useState("E776062468");

    const downloadCV = () => {
        const element = document.getElementById("cvContent");
        const options = {
            margin: 0.2,
            filename: 'CV.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf()
            .from(element)
            .set(options)
            .save();
    }

    return (
        <div>
            vcccc

            <button onClick={downloadCV}>Download</button>
            <div style={{ display: 'none' }}>
                <div className="embassy-cv-main-parent" id="cvContent">
                    <div className='embassy-header'>
                        <div className='embassy-header-first-child' style={{ display: 'flex', flexDirection: 'column', }}>
                            <div style={{ display: 'flex', flexDirection: 'column',  }}>
                                <Barcode
                                       displayValue={false}
                                                value={fileName} height={23} width={1.7} marginBottom={2} />

                                                
                                <span style={{ display: "flex", justifyContent: "space-between", marginLeft: '10px',  }}><span style={{ fontFamily: "serif", fontSize: "8px",  }}>VISA No:</span> <span style={{marginRight: "10px", fontSize: "13px", fontWeight: "bold"}}>{fileName}</span></span>

                                <span style={{ display: "flex", justifyContent: "space-between", marginLeft: '10px',  }}><span style={{ fontFamily: "serif", fontSize: "13px",  }}>sponsor:</span> <span style={{marginRight: "10px", fontSize: "13px"}}>MONIRAH ALHARTHI</span></span>
                            </div>
                            
                            <div className="embassy-header-first-child-img-div" style={{marginLeft: "7px"}}>
                            <img
                            style={{marginTop: "10px", width: "150px", height: "150px"}}
                        className="embassy-header-first-child-img"
                        alt="Personal"
                        src={smallapplicantimage}
                       
                    />
                            </div>
                        </div>

                        {/* <div className='embassy-header-second-child' style={{display: "flex", flexDirection: "column", justifyContent: "space-between",  }}>
                            <div></div>
                            <div style={{margin: 0, padding: 0, marginLeft: "50px"}}>
                            <img
                            style={{width: "150px", height: "150px",}}
                        className="embassy-header-first-child-img"
                        alt="Personal"
                        src={saudiforeignaffairslogo}
                       
                    />
                            </div>
                        </div> */}
                          <div style={{display: "flex", flexDirection: "row", }}>
                          <div className='embassy-header-second-child' style={{display: "flex", flexDirection: "column", justifyContent: "space-between",  }}>
                            <div></div>
                            <div style={{margin: 0, padding: 0, marginLeft: "60px"}}>
                            <img
                            style={{width: "150px", height: "150px",}}
                        className="embassy-header-first-child-img"
                        alt="Personal"
                        src={saudiforeignaffairslogo}
                       
                    />
                            </div>
                        </div>
                        <div className='embassy-header-third-child' style={{fontFamily: "serif",  background: 'none', display: 'flex', flexDirection: "column", paddingLeft: "100px", flexBasis: "70%"  }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Barcode value={"E776062468"} fontWeight={"bold"} height={23} width={1.7} marginBottom={2} />
                                
                            </div>
                            <div style={{ marginTop: "5px", fontFamily: "serif", fontSize: "13px", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", background: "none"  }}>
    <div style={{fontFamily: "serif", textAlign: "center" }}>
        EMBASSY OF SAUDI ARABIA
    </div>
    <div style={{fontFamily: "serif", textAlign: "center" }}>
        CONSULAR SECTION
    </div>

    <div style={{ fontFamily: "serif", textAlign: "center", fontSize: "18px", marginTop: "5px", fontWeight: "bold" }}>
        سفارة المملكة العربية السعودية القسم القنصلي
    </div>
</div>

<div style={{fontFamily: "serif",  fontSize: "12px", background: "none", marginTop: "20px", marginLeft: "-18px" }} >SKY WAY FOREIGN EMPLOYMENT AGENT</div>
<div style={{fontFamily: "serif", marginTop: "10px", fontWeight: "bold", marginLeft: "-10px"}}>skywayagencyoffice@gmail.com</div>
</div>
 
    

                           
                        </div>
                    </div>

                    <div className="content-parent">

                        {/* 1th line */}

                        <div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black", paddingBottom: "5px"}}>
                                      <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "35%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px",}}>Full Name</span>
                                        <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span>
                                        </div>

                                        <div>الاسم الكامل</div>
                        </div>

                        {/* 2th line */}

                        <div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black", paddingBottom: "5px", marginTop: "1px"}}>
                                      <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "35%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px",}}>Mother Name</span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>

                                        <div>الاسلام</div>
                        </div>

                    {/* 3th line */}


                        <div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black", paddingBottom: "5px", marginTop: "1px"}}>


                                      <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "47%"}}>


                                        
                                            <span style={{fontFamily: "serif",  fontSize: "13px",}}>Date of Birth:</span>
                                            <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>02/11/1997</span>
                                           


                                            
                                            <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>تاريخ الميلاد</span>
                                      


                                        </div>

                                        <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "47%"}}>


           <div style={{display: "flex", justifyContent: "space-between", width: "58%",}}>                         
<span style={{fontFamily: "serif",  fontSize: "13px"}}>Place of Birth : </span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>CHORA</span>
</div>    




<span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>مكان الميلاد</span>



</div>
                        </div>

{/* 4th line */}

                        <div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black", paddingBottom: "5px", marginTop: "1px"}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "47%"}}>


  
      <span style={{fontFamily: "serif",  fontSize: "13px",}}>Past Nationality:</span>
     
     


      
      <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}> الجنسية السابقة      </span>



  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "47%"}}>


 <div  style={{display: "flex", justifyContent: "space-between", width: "58%",}}>
<span style={{fontFamily: "serif",  fontSize: "13px",}}>Current Nationality : </span>
<span style={{fontWeight:"bold",fontFamily: "serif",  fontSize: "13px",}}>Ethiopia</span>
</div>




<span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}> الجنسية الحالية
</span>



</div>

</div>

{/* 5th line */}

<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black", paddingBottom: "5px", marginTop: "1px"}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "47%"}}>


  
      <span style={{fontFamily: "serif",  fontSize: "13px",}}>Sex:</span>
      <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>FEMALE</span>
     


      
      <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}> الجنس</span>



  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "47%"}}>


<div  style={{display: "flex", justifyContent: "space-between", width: "58%",}}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", }}>Marital Status: </span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>SINGLE</span>
</div>    




<span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}> الحالة الاجتماعية
</span>



</div>
</div>


{/* 6th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black", paddingBottom: "5px", marginTop: "1px"}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "47%"}}>


  
      <span style={{fontFamily: "serif",  fontSize: "13px",}}>Sect:</span>
      


  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "47%"}}>


<div  style={{display: "flex", justifyContent: "space-between", width: "58%",}}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "7px"}}>Religion: </span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>Islam</span>
</div>    




<span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}> الديانة</span>



</div>
</div>


{/* 7th line */}

<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black", paddingBottom: "5px", marginTop: "1px"}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "47%"}}>


  
      <span style={{fontFamily: "serif",  fontSize: "13px",}}>Qualification:</span>
      <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>PRIMARY SCHOOL</span>
      
     


      
      <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}> المؤهل العلمي</span>



  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "47%"}}>


<div style={{display: "flex", justifyContent: "space-between", width: "58%",}}>                         
<span style={{fontFamily: "serif",  fontSize: "13px",}}>Profession: </span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>HOUSE MAID</span>
</div>    




<span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}> المهنة</span>



</div>
</div>

{/* 8th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black",paddingBottom: "5px", marginTop: "1px"}}>
                                      <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "35%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px",}}>Home address and telephone No. :</span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>

                                        <div> عنوان السكن</div>
                        </div>


{/* 9th line */}

<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black", paddingBottom: "5px", marginTop: "1px"}}>
                                      <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "35%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px", fontWeight: "bold", marginLeft: "60px"}}>RIYADH</span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>

                                        <div> </div>
                        </div>

{/* 10th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black", paddingBottom: "5px", marginTop: "1px"}}>
                                      <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "35%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px",}}>Business address and telephone No. :</span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>

                                        <div> عنوان العمل ورقم الهاتف
                                        </div>
                        </div>


{/* 11th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black", paddingBottom: "5px", marginTop: "1px"}}>
                                      <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "35%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px", fontWeight: "bold", marginLeft: "60px"}}>966500761032</span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>

                                        <div> </div>
                        </div>

{/* 12th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black",paddingBottom: "5px", marginTop: "7px"}}>
                                      <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", }}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px",}}>Purpose Of Travel :</span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>



                                        <div style={{display: "flex", justifyContent: "space-between",  width: "75%",}}>
                                        <span style={{fontFamily: "serif",  fontSize: "15px", background: "#88898a", marginTop: "-7px", marginBottom: "-5px", paddingTop: "7px", width: "50px", paddingLeft: "7px"}}>Work</span>
                                        <span style={{fontFamily: "serif",  fontSize: "15px", background: "#88898a", marginTop: "-7px", marginBottom: "-5px", paddingTop: "7px", width: "55px", paddingLeft: "7px"}}>Transit</span>

                                        <span style={{fontFamily: "serif",  fontSize: "15px", background: "#88898a", marginTop: "-7px", marginBottom: "-5px", paddingTop: "7px", width: "50px", paddingLeft: "7px"}}>Visit</span>
                                        <span style={{fontFamily: "serif",  fontSize: "15px", background: "#88898a", marginTop: "-7px", marginBottom: "-5px", paddingTop: "7px", width: "55px", paddingLeft: "7px"}}>Umrah</span>

                                        <span style={{fontFamily: "serif",  fontSize: "15px", background: "#88898a", marginTop: "-7px", marginBottom: "-5px", paddingTop: "7px", width: "73px", paddingLeft: "7px"}}>Residence</span>
                                        <span style={{fontFamily: "serif",  fontSize: "15px", background: "#88898a", marginTop: "-7px", marginBottom: "-5px", paddingTop: "7px", width: "45px", paddingLeft: "7px"}}>Hajj</span>

                                        <span style={{fontFamily: "serif",  fontSize: "15px", background: "#88898a", marginTop: "-7px", marginBottom: "-5px", paddingTop: "7px", width: "80px", paddingLeft: "7px"}}>Diplomacy</span>
                                        <span style={{fontFamily: "serif",  fontSize: "15px", background: "#88898a", marginTop: "-7px", marginBottom: "-5px", paddingTop: "7px", width: "50px", paddingLeft: "7px"}}>Other</span>

                                        </div>





                                        <div> الغرض
                                        </div>
                        </div>


{/* 13th line */}


<div style={{borderBottom: "2px solid black",}}>

<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid transparent", paddingBottom: "5px", marginTop: "2px"}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", }}>


  
      <span style={{fontFamily: "serif",  fontSize: "13px",marginRight: "5px"}}>Place of Issue :</span>
      <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>ADDIS ABABA</span>



  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>مكان الاصدار Date of issue: </span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px", marginRight: "15px"}}>02/11/2023</span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px", }}>تاريخ الاصدار</span>
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}

</div>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>Passport No: </span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>EP8394839</span>
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}



</div>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>رقم الجواز</span>
{/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>CHORA</span> */}
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}



</div>



</div>


<div>


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid transparent", paddingBottom: "5px", marginTop: "2px"}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", }}>


  
      <span style={{fontFamily: "serif",  fontSize: "13px",marginRight: "5px"}}>Date of Expiry :</span>
      <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>02/11/1997</span>



  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}></span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}></span>
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}

</div>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "15px", marginRight: "5px"}}></span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "15px",}}></span>
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}



</div>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}></span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>تاريخ الانتهاء</span>
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}



</div>



</div>

</div>


</div>


{/* 14th line */}



<div style={{borderBottom: "2px solid black",}}>

<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", flexDirection: "row-reverse" , borderBottom: "2px solid transparent", paddingBottom: "5px", marginTop: "2px"}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", }}>


  
      <span style={{fontFamily: "serif",  fontSize: "13px",marginRight: "5px"}}>تاريخ المغادرة      </span>
      {/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}></span> */}



  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>تاريخ الوصول</span>
{/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>CHORA</span> */}
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}

</div>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>مدة الإقامة بالمملكة</span>
{/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>CHORA</span> */}
</div>    






</div>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}></span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}></span>
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}



</div>



</div>









<div>


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between",  borderBottom: "2px solid transparent", paddingBottom: "5px", marginTop: "2px"}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", }}>


  
      <span style={{fontFamily: "serif",  fontSize: "13px",marginRight: "5px"}}>Duration of stay in the Kingdom :</span>
      {/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>Date of arrival :</span> */}



  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>Date of arrival :</span>
{/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>CHORA</span> */}
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}

</div>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>Date of departuer :</span>
{/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>CHORA</span> */}
</div>    






</div>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}></span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}></span>
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}



</div>



</div>
</div>












</div>



{/* 15th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black", paddingBottom: "5px", marginTop: "2px"}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", }}>


  
      <span style={{fontFamily: "serif",  fontSize: "13px",marginRight: "5px"}}>Mode of Payment:</span>
      {/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>02/11/1997</span> */}



  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>طريقة الدفع Payment No: </span>
{/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>CHORA</span> */}
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}

</div>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>رقم الدفع Date: </span>
{/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>CHORA</span> */}
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}



</div>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
{/* <span style={{fontFamily: "serif",  fontSize: "15px", marginRight: "5px"}}>Place of Birth : </span> */}
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>تاريخ</span>
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}



</div>



</div>

{/* 16th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black", paddingBottom: "1px", marginTop: "1px"}}>
                                      <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "35%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px", fontWeight: "bold"}}>Relationship :</span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>

                                        <div> </div>
                        </div>






{/* 17th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black", paddingBottom: "5px", marginTop: "2px"}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", }}>


  
      <span style={{fontFamily: "serif",  fontSize: "13px",}}>Destination:</span>
      {/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "15px",}}>02/11/1997</span> */}



  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", }}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", }}>المكان المقصود Dealer Name: </span>
{/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>CHORA</span> */}
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}

</div>




<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", }}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
{/* <span style={{fontFamily: "serif",  fontSize: "15px", marginRight: "5px"}}>Place of Birth : </span> */}
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>اسم البائع</span>
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}



</div>



</div>


{/* 18th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid transparent", marginTop: "4px"}}>
                                      <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "35%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px",}}>Dependents traveling in the same passport:</span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>

                                        <div>  ايضاحات تخص أفراد العائلة المضافين على نفس جواز السفر    </div>
                        </div>


{/* 19th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", border: "1px solid black",  marginTop: "1px", height: "50px"}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", borderRight: "1px solid black", height: "100%", width: "35%"}}>


  
      <span style={{fontFamily: "serif",  fontSize: "13px",marginRight: "5px"}}>صلة  </span>
      <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>Relationship</span>



  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", borderRight: "1px solid black", height: "100%", width: "15%"}}>


  
      <span style={{fontFamily: "serif",  fontSize: "13px",marginRight: "5px"}}>تاريخ الميلاد      </span>
      <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>Date of Birth</span>



  </div>


  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", borderRight: "1px solid black", height: "100%", width: "30%"}}>


  
<span style={{fontFamily: "serif",  fontSize: "13px",marginRight: "5px"}}>الجنس</span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>Sex</span>



</div>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%", width: "20%"}}>


  
      <span style={{fontFamily: "serif",  fontSize: "13px",marginRight: "5px"}}>الاسم الكامل      </span>
      <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>Full Name</span>



  </div>



</div>


{/* 20th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "1px solid black", marginTop: "4px"}}>
                                      <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "50%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px",}}>Name and address of company or individual in the Kingdom:</span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>

                                        <div style={{borderBottom: "1px solid black", marginBottom: "4px", width:"40%", display: "flex", justifyContent: "flex-end"}}> اسم وعنوان الشركه او اسم الشخص وعنوانه بالمملكة                                        </div>
                        </div>



{/* 21th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid transparent", marginTop: "1px", }}>
                                      <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "60%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px",}}>The undersigned hereby certify that all the information I have provided are correct</span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>

                                        <div  style={{fontFamily: "serif",  fontSize: "13px",}}>       أقر انا الموقع أدناه بأن كل المعلومات التي دونتها صحيحة                                        </div>
                        </div>


{/* 22th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "8px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid transparent", marginTop: "-3px", }}>
                                      <div style={{fontFamily: "serif",  fontSize: "8px",  display: "flex", justifyContent: "space-between", width: "60%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px",}}>I will abide by the lows of the Kingdom during the period of my residence in it. </span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>

                                        <div  style={{fontFamily: "serif",  fontSize: "13px",}}>       وسأكون ملتزمآ يقوانين المملكة أثناء فترة وجودي بها                                        </div>
                        </div>



{/* 23th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid transparent", paddingBottom: "5px", marginTop: "5px"}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "46%"}}>


  <div>
      <span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>Date:</span>
      <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>02/11/1997</span>
      </div>
     


      <div style={{display: "flex", alignItems: "center"}}>
    <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif"}}>Signature: </span>
    <hr style={{borderBottom: "1px solid black", flexGrow: "1", marginTop: "13px",   width: "80px"}} />
    <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif"}}>التوقيع</span>
</div>



  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "53%"}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>Name : </span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>NIYASA GETANA AREDA</span>
</div>    




<span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}> الاسم الكامل</span>



</div>
</div>


{/* 24th line */}




<div className="first-line" style={{fontFamily: "serif",  fontSize: "8px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid transparent", marginTop: "-3px", }}>
                                      <div style={{fontFamily: "serif",  fontSize: "8px",  display: "flex", justifyContent: "space-between", width: "35%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px",}}>For offical use only:</span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>

                                        <div  style={{fontFamily: "serif",  fontSize: "13px",}}>     للاستخدام الرسمي فقط                                        </div>
                        </div>




{/* 25th line */}



<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid transparent", paddingBottom: "5px", marginTop: "-3px"}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "46%"}}>


  <div>
      <span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>Visit / Work For :</span>
      {/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>02/11/1997</span> */}
      </div>
     


      <div style={{display: "flex", alignItems: "center"}}>
    <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif"}}>التاريخ    </span>
    {/* <hr style={{borderBottom: "1px solid black", flexGrow: "1", marginTop: "13px",   width: "80px"}} />
    <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif"}}>التوقيع</span> */}
</div>



  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "53%"}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>Authorization: </span>
{/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>NIYASA GETANA AREDA</span> */}
</div>    




<span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}> تفويض</span>



</div>
</div>



{/* 26th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "8px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid transparent", marginTop: "-3px", }}>
                                      <div style={{fontFamily: "serif",  fontSize: "8px",  display: "flex", justifyContent: "space-between", width: "35%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px",}}>Type</span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>

                                        <div  style={{fontFamily: "serif",  fontSize: "13px",}}>       زيادة او العمل من أجل                                        </div>
                        </div>



{/* 27th line */}




<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid transparent", paddingBottom: "5px", marginTop: "-3px"}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "49.7%"}}>


  <div>
      <span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>Date of Birth:</span>
      {/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>02/11/1997</span> */}
      </div>
     


      <div style={{display: "flex", alignItems: "center"}}>
    <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif"}}>نوع </span>
    {/* <hr style={{borderBottom: "1px solid black", flexGrow: "1", marginTop: "13px",   width: "80px"}} />
    <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif"}}>التوقيع</span> */}
</div>



  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "49.7%"}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>Duration: </span>
{/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>NIYASA GETANA AREDA</span> */}
</div>    




<span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}> المدة الزمنية</span>



</div>
</div>


{/* 28th line */}



<div className="first-line" style={{fontFamily: "serif",  fontSize: "8px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid transparent", marginTop: "-3px", }}>
                                      <div style={{fontFamily: "serif",  fontSize: "8px",  display: "flex", justifyContent: "space-between", width: "35%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px",}}>رئيس القسم القنصلي</span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>

                                        <div  style={{fontFamily: "serif",  fontSize: "13px",}}>      فحص بواسطة                                        </div>
                        </div>




{/* 29th line */}



<div className="first-line" style={{fontFamily: "serif",  fontSize: "8px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid transparent", marginTop: "-3px", }}>
                                      <div style={{fontFamily: "serif",  fontSize: "8px",  display: "flex", justifyContent: "space-between", width: "35%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px",}}>Head of consular section</span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>

                                        <div  style={{fontFamily: "serif",  fontSize: "13px",}}>     Checked by  </div>
                        </div>



{/* 30th line */}





<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid transparent", paddingBottom: "5px", marginTop: "25px",}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", }}>


  
      <span style={{fontFamily: "serif",  fontSize: "13px", fontWeight: "bold"}}>Wednesday, October 2, 2024</span>
      {/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "15px",}}>02/11/1997</span> */}



  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", }}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", fontWeight: "bold", marginRight: "5px"}}>www.ntechagent.com | </span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",  marginRight: "5px"}}> <span> </span> +251 911 454176 | <span> </span></span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px", fontWeight: "bold"}}>ntechagent@gmail.com</span>
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}

</div>




<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", }}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
{/* <span style={{fontFamily: "serif",  fontSize: "15px", marginRight: "5px"}}>Place of Birth : </span> */}
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>page 1 of 1</span>
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}



</div>



</div>


{/* 31th line */}
                    </div>
                </div>
            </div>
            
        </div>
    )
}



export default TestpdfDesign;