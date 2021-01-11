//
//  ViewController.swift
//  RandomNumberDelegate
//
//  Created by Michelle Galetti on 9/24/19.
//  Copyright © 2019 Michelle Galetti. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var userGuessLabel: UILabel!
    @IBOutlet weak var resultLabel: UILabel!
    @IBOutlet weak var guessButton: UIButton!
    @IBOutlet weak var playagainButton: UIButton!
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

    @IBAction func playAgain(_ sender: UIButton) {
        createRandomNumber()
        playAgainButton.isHidden = true
            guessButton.isHidden = false
        resultLabel.text = ""
        userGuessLabel.text = "New Game"
        previousGuess = ""
    }
    func userDidFinish(_ controller: GuessInputViewController, guess:  String) {         userGuessLabel.text = "The guess was " +  guess
        previousGuess = guess
        if let numberGuess = Int(guess) {             if (numberGuess > randomNumber) {                resultLabel.text = "Guess too high"
            
        } else if (numberGuess < randomNumber) {                 resultLabel.text = "Guess too low"
            
        } else {                 resultLabel.text = "Guess is correct"
            //show the play again button
            playAgainButton.isHidden = false                 //hide the guess again number49
            guessButton.isHidden = true
            }
        }
}
}


