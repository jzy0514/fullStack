function marry(man, woman) {
  women.husban = man;
  man.wife = woman;
  return {
    father: man,
    month: woman
  }
}
let family = marry({
  name: 'Jhon'
},{
  name: 'Ann'
})