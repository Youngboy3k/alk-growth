import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="h-4 w-px bg-border" />
            <h1 className="text-xl font-semibold">Terms of Service</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Legal Information
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By accessing and using ALK Growth's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>2. Description of Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  ALK Growth provides AI-powered website building and SEO optimization services, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Custom website design and development</li>
                  <li>Website rebuilding and optimization</li>
                  <li>Search engine optimization (SEO) services</li>
                  <li>AI-powered content creation and strategy</li>
                  <li>Technical SEO audits and implementation</li>
                  <li>Ongoing website maintenance and support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>3. Service Packages and Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Website Building</h4>
                    <p className="text-muted-foreground">
                      Custom responsive design with AI-optimized performance, mobile-first approach, and conversion optimization.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Website + SEO</h4>
                    <p className="text-muted-foreground">
                      Everything in Website Building plus advanced AI SEO implementation, keyword strategy, technical SEO audit, and local SEO optimization.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Full Growth Package</h4>
                    <p className="text-muted-foreground">
                      Everything in Website + SEO plus automated blog content system, AI-powered content strategy, ongoing SEO monitoring, and performance analytics.
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground mt-4">
                    Pricing and specific deliverables will be outlined in individual project agreements. All prices are subject to change with 30 days' notice.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>4. Client Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Clients are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Providing accurate and complete information about their business and requirements</li>
                  <li>Timely provision of content, images, and other materials needed for the project</li>
                  <li>Reviewing and approving deliverables within agreed timeframes</li>
                  <li>Making timely payments as specified in the project agreement</li>
                  <li>Providing access to necessary accounts and systems</li>
                  <li>Complying with all applicable laws and regulations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>5. Payment Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Payment Schedule</h4>
                    <p className="text-muted-foreground">
                      Payment terms will be specified in individual project agreements. Typically, we require:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                      <li>50% deposit to begin work</li>
                      <li>25% upon completion of design phase</li>
                      <li>25% upon project completion and delivery</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Late Payments</h4>
                    <p className="text-muted-foreground">
                      Late payments may incur a 1.5% monthly service charge. We reserve the right to suspend services for accounts with outstanding balances over 30 days.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Refunds</h4>
                    <p className="text-muted-foreground">
                      Refunds are handled on a case-by-case basis. Work completed and delivered is generally non-refundable. Custom development work is non-refundable once development begins.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>6. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Client Content</h4>
                    <p className="text-muted-foreground">
                      Clients retain ownership of all content, images, and materials they provide. Clients grant ALK Growth a license to use such materials for the purpose of providing services.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Deliverables</h4>
                    <p className="text-muted-foreground">
                      Upon full payment, clients receive ownership of the final website design and code. ALK Growth retains the right to use the work for portfolio and marketing purposes.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Proprietary Methods</h4>
                    <p className="text-muted-foreground">
                      ALK Growth's proprietary AI systems, methodologies, and processes remain the exclusive property of ALK Growth.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>7. Project Timeline and Deliverables</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Timeline</h4>
                    <p className="text-muted-foreground">
                      Project timelines will be specified in individual agreements. Typical timelines are:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                      <li>Website Building: 2-4 weeks</li>
                      <li>Website + SEO: 4-6 weeks</li>
                      <li>Full Growth Package: 6-8 weeks</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Delays</h4>
                    <p className="text-muted-foreground">
                      Delays caused by client factors (late content, approval delays, etc.) may extend project timelines. ALK Growth will not be responsible for delays beyond our control.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Revisions</h4>
                    <p className="text-muted-foreground">
                      Each project includes a specified number of revision rounds. Additional revisions may incur additional charges.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>8. Warranties and Disclaimers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Service Warranty</h4>
                    <p className="text-muted-foreground">
                      ALK Growth warrants that services will be performed in a professional manner consistent with industry standards. We will correct any defects in our work at no additional cost for 30 days after delivery.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">SEO Results</h4>
                    <p className="text-muted-foreground">
                      While we use proven SEO strategies, we cannot guarantee specific search engine rankings or traffic increases. SEO results depend on many factors beyond our control.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Third-Party Services</h4>
                    <p className="text-muted-foreground">
                      We are not responsible for the performance, availability, or terms of third-party services, platforms, or tools used in your project.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>9. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, ALK Growth's total liability for any claims arising from our services shall not exceed the total amount paid by the client for the specific project. We shall not be liable for any indirect, incidental, special, or consequential damages.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>10. Confidentiality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  ALK Growth will maintain the confidentiality of all client information and project details. We will not disclose confidential information to third parties without written consent, except as required by law.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>11. Termination</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Client Termination</h4>
                    <p className="text-muted-foreground">
                      Clients may terminate services with 30 days' written notice. Payment is due for all work completed up to the termination date.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">ALK Growth Termination</h4>
                    <p className="text-muted-foreground">
                      We may terminate services immediately for non-payment, breach of contract, or other material violations of these terms.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>12. Force Majeure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Neither party shall be liable for delays or failures in performance due to circumstances beyond their reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, or government actions.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>13. Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to conflict of law principles. Any disputes shall be resolved through binding arbitration.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>14. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  ALK Growth reserves the right to modify these terms at any time. Changes will be posted on our website with an updated "Last modified" date. Continued use of our services constitutes acceptance of the modified terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>15. Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these terms of service, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> info@alk-growth.com</p>
                  <p><strong>Website:</strong> alk-growth.com</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
