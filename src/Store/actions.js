import axios from "axios";
import axiosIns, { baseURL } from "../Component/helper";

export const Init = () => {
  return async dispatch => {
    const token = localStorage.getItem("Xtoken");
    dispatch({
      type: 'LOGIN',
      payload: token,
    })
    // }
  }
}
export const LoginAction = (access) => {
  return async dispatch => {
    localStorage.setItem("Xtoken", access);
    dispatch({
      type: 'LOGIN',
      payload: access,
    })
    // }
  }
}
export const LogoutAction = () => {
  return async dispatch => {
    localStorage.clear()
    dispatch({
      type: 'LOGOUT',
      payload: null,
    })
    // }
  }
}
export const PostCustomer = (data,setLoading) => {
  return async dispatch => {
    setLoading(true)
    var msg = ''
    const token = localStorage.getItem("Xtoken");
    fetch(`${baseURL}/customers/`, {
      method: 'POST',
      redirect: 'follow',
      headers: {
        'Authorization': `Token ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setLoading(false)
        msg = result
      })
      .catch(error => {
        console.log('error', error)
        setLoading(false)
        msg = error
      });

    dispatch({
      type: 'MSG',
      payload: msg,
    })
    // }
  }
}

export const GetCustomer = () => {
  const token = localStorage.getItem("Xtoken");
  console.log(token)
  return async dispatch => {
    fetch(`${baseURL}/customers/`, {
      method: 'GET',
      redirect: 'follow',
      headers: {
        'Authorization': `Token ${token}`
      },
    })
      .then(response => response.json())
      .then(result => {
        console.log(result)
        dispatch({
          type: 'CUSTOMER',
          payload: result,
        })
      })
      .catch(error => {
        console.log('error', error)
        var data = []
        dispatch({
          type: 'CUSTOMER',
          payload: data,
        })
      });
  }
}

export const GetProduct = () => {
  return async dispatch => {
    const token = localStorage.getItem("Xtoken");
    fetch(`${baseURL}/products/`, {
      method: 'GET',
      redirect: 'follow',
      headers: {
        'Authorization': `Token ${token}`
      },
    })
      .then(response => response.json())
      .then(result => {
        console.log(result)
        dispatch({
          type: 'PRODUCT',
          payload: result,
        })
      })
      .catch(error => {
        console.log('error', error)
        var data = []
        dispatch({
          type: 'PRODUCT',
          payload: data,
        })
      });
    
  }
}

export const GetAgents = () => {
  return async dispatch => {
    const token = localStorage.getItem("Xtoken");
    fetch(`${baseURL}/agent/`, {
      method: 'GET',
      redirect: 'follow',
      headers: {
        'Authorization': `Token ${token}`
      },
    })
      .then(response => response.json())
      .then(result => {
        console.log(result)
        dispatch({
          type: 'AGENT',
          payload: result,
        })
      })
      .catch(error => {
        console.log('error', error)
        var data = []
        dispatch({
          type: 'AGENT',
          payload: data,
        })
      });
    
  }
}

export const GetComplaints = () => {
  return async dispatch => {
    const token = localStorage.getItem("Xtoken");
    fetch(`${baseURL}/complaints/`, {
      method: 'GET',
      redirect: 'follow',
      headers: {
        'Authorization': `Token ${token}`
      },
    })
      .then(response => response.json())
      .then(result => {
        console.log(result)
        dispatch({
          type: 'COMPLAINT',
          payload: result,
        })
      })
      .catch(error => {
        console.log('error', error)
        var data = []
        dispatch({
          type: 'COMPLAINT',
          payload: data,
        })
      });
    
  }
}

export const GetCollection = (data) => {
  return async dispatch => {
    const token = localStorage.getItem("Xtoken");
    fetch(`${baseURL}/collections/`, {
      method: 'GET',
      redirect: 'follow',
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        console.log(result)
        dispatch({
          type: 'COLLECTION',
          payload: result,
        })
      })
      .catch(error => {
        console.log('error', error)
        var data = []
        dispatch({
          type: 'COLLECTION',
          payload: data,
        })
      });
    
  }
}
export const PostProduct = (data,setLoading) => {
  return async dispatch => {
    setLoading(true)
    var msg = ''
    const token = localStorage.getItem("Xtoken");
    fetch(`${baseURL}/products/`, {
      method: 'POST',
      redirect: 'follow',
      headers: {
        'Authorization': `Token ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setLoading(false)
        msg = result
      })
      .catch(error => {
        console.log('error', error)
        setLoading(false)
        msg = error
      });

    dispatch({
      type: 'MSG',
      payload: msg,
    })
    // }
  }
}
export const PostComplaints = (data,setLoading) => {
  return async dispatch => {
    setLoading(true)
    var msg = ''
    const token = localStorage.getItem("Xtoken");
    fetch(`${baseURL}/complaints/`, {
      method: 'POST',
      redirect: 'follow',
      headers: {
        'Authorization': `Token ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setLoading(false)
        msg = result
      })
      .catch(error => {
        console.log('error', error)
        setLoading(false)
        msg = error
      });

    dispatch({
      type: 'MSG',
      payload: msg,
    })
    // }
  }
}
