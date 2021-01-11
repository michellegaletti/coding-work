//
//  ViewController.swift
//  Tip Calculator
//
//  Created by Michelle Galetti on 9/26/19.
//  Copyright © 2019 Michelle Galetti. All rights reserved.
//

import UIKit

//UITextFieldDelegate will call to this method
class ViewController: UIViewController, UITextFieldDelegate {
    
    @IBOutlet weak var checkAmount: UITextField!
    @IBOutlet weak var tipPercent: UITextField!
    
    @IBOutlet weak var peopleLabel: UILabel!
    @IBOutlet weak var peopleStepper: UIStepper!
    
    @IBOutlet weak var tipDue: UILabel!
    @IBOutlet weak var totalDue: UILabel!
    @IBOutlet weak var totalDuePerPerson: UILabel!
    
    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        textField.resignFirstResponder()
        return true
    }
    
    @IBAction func updatePeople(_ sender: Any) {
        if peopleStepper.value == 1{
            peopleLabel.text = "1 person"
        } else{
            //Send format to change double to int
            peopleLabel.text = String(format: "%.0f", peopleStepper.value) + " people"
        }
        updateTipTotals()
    }
    
    func updateTipTotals() {
        var amount:Float //check amount
        var pct:Float //tip percentage
        
        if checkAmount.text!.isEmpty {
            amount = 0.0
        } else {
            //Unwrapping the optional float and the text
            amount = Float(checkAmount.text!)!
        }
        if tipPercent.text!.isEmpty {
            pct = 0.0
        }
        else {
            pct = Float(tipPercent.text!)!/100
        }
        
        let numberOfPeople = peopleStepper.value
        let tip=amount*pct
        let total=amount+tip
        var personTotal : Float = 0.0 //specify Float so it's not a Double
        if numberOfPeople > 0 {
            personTotal = total / Float(numberOfPeople)
        }else {
            //create a UIAlertController object
            let alert=UIAlertController(title: "Warning", message: "The number of people must be greater than 0", preferredStyle: UIAlertController.Style.alert)
            //create a UIAlertAction object for the button
            let cancelAction=UIAlertAction(title: "Cancel", style:UIAlertAction.Style.cancel, handler: nil)
            alert.addAction(cancelAction) //adds the alert action to the alert object
            let okAction=UIAlertAction(title: "OK", style: UIAlertAction.Style.default, handler: {action in
                self.peopleStepper.value = 1
                self.peopleLabel.text? = "1 person"
                self.updateTipTotals()
            })
            alert.addAction(okAction)
            present(alert, animated: true, completion: nil)
        } //end else
        
        //format results as currency
        //Instance of the class
        let currencyFormatter = NumberFormatter()
        currencyFormatter.numberStyle=NumberFormatter.Style.currency //set the number style
        tipDue.text=currencyFormatter.string(from: NSNumber(value: tip)) //returns a formatted string
        totalDue.text=currencyFormatter.string(from: NSNumber(value: total))
        totalDuePerPerson.text=currencyFormatter.string(from: NSNumber(value: personTotal))
    }
    
    //Tells the dlegate that editing stopped for the specified text field
    func textFieldDidEndEditing(_ textField: UITextField) {
        updateTipTotals()
    }
    
    override func viewDidLoad() {
        checkAmount.delegate=self
        tipPercent.delegate=self
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }


}

