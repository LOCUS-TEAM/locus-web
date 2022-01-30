import React from 'react';
import swal from 'sweetalert';

// 프로필에서 사용 할 데이터
const serviceData = {
  leaf: "https://discord.com/oauth2/authorize?client_id=903287362698760263&permissions=0&scope=bot%20applications.commands",
  ravi: "https://discord.com/oauth2/authorize?client_id=902786497785241600&permissions=0&scope=bot%20applications.commands"
};

const Invite = ({ match }) => {

  let { service } = match.params;

  if (!serviceData[service]) {

    return swal("해당 서비스는 존재하지 않습니다.", "정식 출시된 서비스인지 확인해 주세요.", "error")
    .then(() => {
      window.location.replace('/');
    });

  }

  window.location.replace(serviceData[service]);

}

export default Invite;