export default async function () {
  const { default: foo } = await import("./foo.js");
  console.log(foo);
}
