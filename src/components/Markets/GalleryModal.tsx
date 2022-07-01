import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import {MdArrowBackIosNew,MdArrowForwardIos} from "react-icons/md"

const GalleryModal = ({ images }: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [swiperMove, setSwiperMove] = useState<any>({});

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const slideNextImage=() =>{
    
    if(swiperMove.activeIndex==images.length-1)
    {
        swiperMove.slideTo(0)
    }
    else{
        swiperMove?.slideNext()
    }

  }

  const slidePrevImage=()=>{
    if(swiperMove.activeIndex==0)
    {
        swiperMove.slideTo(images.length-1)
    }
    else{
        swiperMove?.slidePrev()
    }
  }



  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Gallery"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <Swiper allowTouchMove={false} onInit={(ev) => {
            setSwiperMove(ev)
    }}>
            {
                images.map((val:any,i:any)=>{

                    return (
                    <SwiperSlide className="w-full flex justify-between items-center"  >
                        <MdArrowBackIosNew size={30} cursor="pointer" onClick={() =>{slidePrevImage()} } />
                        <img src={val} className="w-1/2" alt="" />
                        <MdArrowForwardIos size={30} cursor="pointer" onClick={()=>slideNextImage()} />
                      </SwiperSlide>
                    )
                     
                })
            }
        </Swiper>
      </Modal>
    </>
  );
};

export default GalleryModal;
