/*
 * <<
 * wormhole
 * ==
 * Copyright (C) 2016 - 2017 EDP
 * ==
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * >>
 */

import React from 'react'

import Form from 'antd/lib/form'
import Button from 'antd/lib/button'

export class JobLogs extends React.Component {
  refreshLogs = () => {
    this.props.onInitRefreshLogs(this.props.logsProjectId, this.props.logsJobId)
  }

  render = (text, record) => {
    const { jobLogsContent, refreshJobLogLoading, refreshJobLogText } = this.props

    let logsContentFinal = ''
    if (jobLogsContent !== undefined) {
      logsContentFinal = jobLogsContent.replace(/\n/g, '\n')
    }

    return (
      <div>
        <div className="logs-modal-style">
          <span className="logs-btn-style">
            <Button
              icon="reload"
              type="ghost"
              loading={refreshJobLogLoading}
              onClick={this.refreshLogs}
              className="logs-refresh-style refresh-button-style"
            >
              {refreshJobLogText}
            </Button>
          </span>
        </div>

        <div className="logs-content">
          <pre>
            {logsContentFinal}
          </pre>
        </div>
      </div>
    )
  }
}

JobLogs.propTypes = {
  jobLogsContent: React.PropTypes.string,
  onInitRefreshLogs: React.PropTypes.func,
  logsProjectId: React.PropTypes.number,
  logsJobId: React.PropTypes.number,
  refreshJobLogLoading: React.PropTypes.bool,
  refreshJobLogText: React.PropTypes.string
}

export default Form.create({wrappedComponentRef: true})(JobLogs)
