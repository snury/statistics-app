import config from "api-config/http";


const queryString = (object) => {
  return `?${Object.keys(object).map(key => [key, object[key]].map(encodeURIComponent).join("=")).join("&")}`;
};

const createRequest = async function(actionURL, data = {}, method = "GET", apiEndpoint = config.httpRoot) {
  const headers = new Headers();
  headers.append("Accept", "application/json");

  let body = null;
  if (Object.keys(data).some(field => data[field] instanceof Blob)) {
    body = new FormData();

    Object.keys(data).forEach((field) => {
      if (data[field] instanceof Blob) {
        body.append(field, data[field], data[field].name);
      } else {
        body.append(`data[${field}]`, data[field]);
      }
    });
  } else if ((method.toUpperCase() === "GET") || (method.toUpperCase() === "HEAD")) {
    actionURL += queryString(data);
  } else {
    headers.append("Content-Type", "application/json");

    body = JSON.stringify(data);
  }

  const requestParams = Object.assign({ method, headers }, body && { body });

  const response = await fetch(apiEndpoint + actionURL, requestParams);

  const responseText = await response.text();

  if (responseText.length > 0) {
    return JSON.parse(responseText);
  }

  return null;
};

export async function loadMonitorings() {
  return createRequest("/monitorings");
}

export async function activateMonitoring(id) {
  await createRequest(`/monitorings/${id}/activate`, {}, "POST");
}

export async function deactivateMonitoring(id) {
  await createRequest(`/monitorings/${id}/deactivate`, {}, "POST");
}

export async function loadStatistics(id) {
  return createRequest(`/monitorings/${id}/stats`);
}
