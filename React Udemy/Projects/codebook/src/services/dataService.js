function getSession() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));

  return { token, id: cbid };
}

export async function getUser() {
  const browserData = getSession();
  console.log(browserData);

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserData.token}`,
    },
  };
  const response = await fetch(
    `http://localhost:3004/600/users/${browserData.id}`,
    requestOptions
  );
  const data = await response.json();
  return data;
}

export async function getUserOrders() {
  const browserData = getSession();
  const response = await fetch(
    `http://localhost:3004/660/orders?user.id=${browserData.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${browserData.token}`,
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function createOrder(cartList, total, user) {
  const broswerData = getSession();
  const order = {
    cartList: cartList,
    amount_paid: total,
    quantity: cartList.length,
    user: {
      name: user.name,
      email: user.email,
      id: user.id,
    },
  };
  const response = await fetch(`http://localhost:3004/660/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${broswerData.token}`,
    },
    body: JSON.stringify(order),
  });
  const data = await response.json();
  return data;
}
