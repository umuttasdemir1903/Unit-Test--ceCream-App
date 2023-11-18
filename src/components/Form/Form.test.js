import { render, screen, fireEvent } from "@testing-library/react";
import Form from ".";
import userEvent from "@testing-library/user-event";

//ilk olarak test etmek istediğimzi bileşeni
//(render) ile ekrana bastık ve parantezlerin içine
// test edeceğimiz bileşem Form olduğu için
// Form bileşenini verdik.

test("Kosullarin onaylanmasina gore butonun aktifliği", async () => {
  render(<Form />);
  // User'in kurulumunu yapma
  const user = userEvent.setup();

  // Gerekli elemanları alma
  const orderBtn = screen.getByRole("button");
  // Eğer birden fazla checkbox'lı input varsa
  // name ile çağırılır.
  const checkBox = screen.getByRole("checkbox", {
    name: "I chose at least one ice cream and toppings",
  });

  // buton başlangıçta inaktiftir.
  expect(orderBtn).toBeDisabled();

  // checkbox tickli mi değil mi kontrol etme
  expect(checkBox).not.toBeChecked();

  // checkbox'ı tickle ve butonun aktifliğini kontrol et
  await user.click(checkBox);
  expect(orderBtn).toBeEnabled();

  // checkbox'ın tick'i kaldır ve butonun aktifliğini kontrol et.
  await user.click(checkBox);
  expect(orderBtn).toBeDisabled();
});

test("onayla butonu hover olunca bildirim çıkar", async () => {
  render(<Form />);
  const user = userEvent.setup();

  // gerekli elemanların çağırılımı
  const button = screen.getByRole("button");
  const checkBox = screen.getByRole("checkbox");

  // kullanıcı etkileşimlerini tetikleme
  await user.click(checkBox);

  fireEvent.mouseEnter(button);

  // Bildirimi çağırma
  //* exact => false yağtığımıza
  //* cümlede bir kelime bile uyuşuyorsa test geçer
  //* ama true olursa cümlenin tamamının yazılması gerek.
  const popup = screen.getByText("your orders", { exact: false });

  // Bildirim gözüküyor mu ?
  expect(popup).toBeVisible();

  // mouse'u butondan çekme
  fireEvent.mouseLeave(button);

  // popup gözükmüyor mu ?
  expect(popup).not.toBeVisible();
});
