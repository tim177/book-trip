/*eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';

export const updateSetting = async (data, type) => {
  console.log(data, type);
  try {
    const url =
      type === 'password'
        ? `/api/v1/users/updateMyPassword`
        : `/api/v1/users/updateUserAbout`;
    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });
    console.log(res);
    if (res.data.status === 'success')
      showAlert('success', `${type.toUpperCase()} Updated Successfully!`);
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
