//
//  ViewController.swift
//  ImageViewApp
//
//  Created by Michelle Galetti on 9/11/19.
//  Copyright © 2019 Michelle Galetti. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var imageView: UIImageView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        imageView.isUserInteractionEnabled = true
        // Do any additional setup after loading the view.
    }
    
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?){
        let touch = touches.first
        
        if touch?.view == imageView{
            print("Touched")
        }else{
            print("Nothing")
        }
    }
}

