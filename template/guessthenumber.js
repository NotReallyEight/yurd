const maingo = `package main

import (
	"fmt"
	"math/rand"
)

func main() {
	var number int = rand.Intn(100)
	var attempt int
	fmt.Print(number)
	fmt.Print("Try to guess the number... ")
	fmt.Scan(&attempt)

	for attempt != number {
		fmt.Print("No. Retry... ")
		fmt.Scan(&attempt)
	}
	fmt.Print("You guessed!")
}`

const mainr = `readinteger <- function()
{ 
  n <- readline(prompt="Try to guess the number... ")
  if(!grepl("^[0-9]+$",n))
  {
    return(readinteger())
  }
  return(as.integer(n))
}
  
num <- round(runif(1) * 100, digits = 0)
attempt <- -1


while(attempt != num) { 
  attempt <- readinteger()
  if (attempt == num) {
    cat("You guessed!")
  }
  else if (attempt > num) {
    cat("The number is smaller than ", attempt, ". Retry... ")
  }
  else if (attempt < num) {
      cat("The number is bigger than ", attempt, ". Retry... ")
  }
}`

module.exports = {
maingo,
mainr
}