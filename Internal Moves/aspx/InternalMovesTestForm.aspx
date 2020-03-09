
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="/sites/vt/SiteAssets/apps/CICO%20Internal%20Moves/form/css/testFormStyle.css">



<!-- MultiStep Form -->

<div class="container1">


        <div class="row">
                <div class="col-md-12 col-md-offset-3">
                    <form id="msform">
                        <!-- progressbar -->
                        <ul id="progressbar" class="msNode">
                            <li class="active">Processing Time</li>
                            <li>Personnel Info</li>
                            <li>Change Actions</li>
                            <li>Administrative</li>
                        </ul>
                        <!-- fieldsets -->
        
                        <fieldset>
                            <h2 class="fs-title msNode">Processing Time</h2>
                            <h3 class="fs-subtitle msNode" style="bottom:25px;">Tell us Something about Processing Time</h3>
                            
                            <div class="form-group" style="">
                                <input type="text" readonly/>
                                <label for="input" class="control-label">Effective Move Date</label><i class="bar"></i>
                            </div>

                            
                            <div class="form-group" style="">
                                <select id="internalchanges">
                                  <option>Select an Internal Change</option>
                                  <option>Long Term Absence</option>
                                  <option>Short Term Absence</option>
                                  <option>Internal Move</option>
                                  <option>Seat Change</option>
                                </select>
                                <label for="select" class="control-label">Type of Internal Change</label><i class="bar"></i>
                            </div>

                            <div class="checkbox" style="">
                                    <label>
                                      <input type="checkbox" checked="checked"/><i class="helper"></i>Cancel Internal Change
                                    </label>
                            </div>

                            <div class="form-group" style="">
                                    <input type="text" readonly/>
                                    <label for="input" class="control-label">Projected Return</label><i class="bar"></i>
                            </div>
    
    


                            <!--

                            <div class="form-group" style="position:relative;width:250px">
                                <textarea required="required"></textarea>
                                <label for="textarea" class="control-label">Textarea</label><i class="bar"></i>
                            </div>

                            <div class="checkbox" style="position:relative;width:250px">
                                <label>
                                  <input type="checkbox" checked="checked"/><i class="helper"></i>I'm the label from a checkbox
                                </label>
                            </div>

                            <div class="form-radio">
                                <div class="radio">
                                  <label>
                                    <input type="radio" name="radio" checked="checked"/><i class="helper"></i>I'm the label from a radio button
                                  </label>
                                </div>
                                <div class="radio">
                                  <label>
                                    <input type="radio" name="radio"/><i class="helper"></i>I'm the label from a radio button
                                  </label>
                                </div>
                            </div>

                        -->
                          
                          
                          
                            <input type="button" name="next" class="action-button" value="Save"/>

                            <input type="button" name="next" class="next action-button" value="Next"/>
                        </fieldset>
                        <fieldset>
                            <h2 class="fs-title">Personnel Info</h2>
                            <h3 class="fs-subtitle">Your presence on the social network</h3>
                            <input type="text" name="twitter" placeholder="Twitter"/>
                            <input type="text" name="facebook" placeholder="Facebook"/>
                            <input type="text" name="gplus" placeholder="Google Plus"/>
                            <input type="button" name="previous" class="previous action-button-previous" value="Previous"/>
                            <input type="button" name="next" class="next action-button" value="Next"/>
                        </fieldset>
                        <fieldset>
                            <h2 class="fs-title">Change Actions</h2>
                            <h3 class="fs-subtitle">Fill in your credentials</h3>
                            <input type="text" name="email" placeholder="Email"/>
                            <input type="password" name="pass" placeholder="Password"/>
                            <input type="password" name="cpass" placeholder="Confirm Password"/>
                            <textarea rows="4" cols="50"></textarea>
                            <input type="button" name="previous" class="previous action-button-previous" value="Previous"/>
                            <input type="button" name="next" class="next action-button" value="Next"/>
                        </fieldset>
        
                        <fieldset>
                                <h2 class="fs-title">Administrative</h2>
                                <h3 class="fs-subtitle">Fill in your credentials</h3>
                                <input type="text" name="email" placeholder="Email"/>
                                <input type="password" name="pass" placeholder="Password"/>
                                <input type="password" name="cpass" placeholder="Confirm Password"/>
                                <input type="button" name="previous" class="previous action-button-previous" value="Previous"/>
                                <input type="submit" name="submit" class="submit action-button" value="Submit"/>
                        </fieldset>
                        
                        
        
                    </form>
                </div>
        </div>
        




        
</div>


    
    
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" type="text/javascript"></script>
<script src="/sites/vt/SiteAssets/apps/CICO%20Internal%20Moves/form/js/testFormScript.js" type="text/javascript"></script>

    
