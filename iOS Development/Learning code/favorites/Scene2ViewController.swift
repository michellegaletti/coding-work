//
//  Scene2ViewController.swift
//  favorites
//
//  Created by Michelle Galetti on 10/3/19.
//  Copyright © 2019 Michelle Galetti. All rights reserved.
//

import UIKit

class Scene2ViewController: UIViewController, UITextFieldDelegate {

    @IBOutlet weak var userBook: UITextField!
    @IBOutlet weak var userAuthor: UITextField!
    
    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        textField.resignFirstResponder()
        return true
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "doneFav"{
            //We want to specfically access the ViewController class so we can access the properties in this class
            let scene1ViewController = segue.destination as! ViewController
            if userBook.text!.isEmpty == false{
                scene1ViewController.user.favBook = userBook.text
            }
            if userAuthor.text!.isEmpty == false{
                scene1ViewController.user.favAuthor = userAuthor.text
            }
        }
    }
    override func viewDidLoad() {
        userBook.delegate = self
        userAuthor.delegate = self
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
    
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
