import { Button, Modal } from "antd";
import "./confirmDialog.scss"

function ConfirmDialog({
    isModalVisible,
    setIsModalVisible,
    confirmFunction,
  }: any) {
    const handleOk = () => {
      confirmFunction();
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
    return (
      <>
        <Modal
          title="Confirm"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <div className="flex justify-center ">
              <button
                className="buy_button"
                onClick={() => handleOk()}
              >
                Buy
              </button>
              <button
                className="cancel_button"
                onClick={() => handleCancel()}
              >
                Cancel
              </button>
            </div>,
          ]}
        >
          <p className="desc">
            Satın almak istediğinize emin misiniz ?
          </p>
        </Modal>
      </>
    );
  }
  
  export {ConfirmDialog}



  